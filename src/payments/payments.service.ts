import { Injectable } from '@nestjs/common';
import { ApiParams, ApiResponse } from 'src/common';
import { UtilsService } from 'src/common/utils/utils.service';
import { PAYMENTS_DB } from './db/payments.db';

import { PaymentRefund } from './interface/payment-refund.model';
import { PaymentReport } from './interface/payment-report.model';

@Injectable()
export class PaymentsService {
  constructor(private utils: UtilsService) {}

  findPayments(params: ApiParams) {
    return this.filterByReport(PAYMENTS_DB.REPORT, params);
  }

  findRefund(params: ApiParams) {
    return this.filterByRefund(PAYMENTS_DB.REFUND, params);
  }

  private filterByReport(
    data: PaymentReport[],
    params: ApiParams,
  ): ApiResponse<PaymentReport> {
    const { page, take, nroCedula, estado, fechaDesde, fechaHasta } = params;
    let filtering: PaymentReport[] = [];
    const filterByDate = data.filter((res: PaymentReport) =>
      this.utils.filterDate(res?.fechaReporte, fechaDesde, fechaHasta),
    );

    filtering = [...filterByDate];

    if (+estado !== 0 && !Number.isNaN(estado)) {
      filtering = filtering.filter(
        (res: PaymentReport) => res?.IDestado === +estado,
      );
    }

    if (nroCedula) {
      const filterByDNI = filtering.filter(
        (res: PaymentReport) => res?.nroCedula === +nroCedula,
      );
      filtering = [...filterByDNI];
    }

    return this.utils.filterByPage<PaymentReport>(filtering, page, take);
  }

  private filterByRefund(
    data: PaymentRefund[],
    params: ApiParams,
  ): ApiResponse<PaymentRefund> {
    const { page, take, prestador, fechaDesde, fechaHasta } = params;
    let filtering: PaymentRefund[] = [];
    const filterByDate = data.filter((res: PaymentRefund) =>
      this.utils.filterDate(res?.FechaVenta, fechaDesde, fechaHasta),
    );

    filtering = [...filterByDate];

    if (+prestador !== 0 && !Number.isNaN(prestador)) {
      const filterByProvider = filtering.filter(
        (res: PaymentRefund) => res?.idLender === +prestador,
      );
      filtering = [...filterByProvider];
    }
    return this.utils.filterByPage<PaymentRefund>(filtering, page, take);
  }
}
