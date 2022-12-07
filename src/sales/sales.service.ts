import { Injectable } from '@nestjs/common';
import { ApiParams, ApiResponse } from 'src/common';
import { UtilsService } from 'src/common/utils/utils.service';
import { SALES_DB } from './db/sales.db';
import { ResponseData } from './interface/response-data.interface';

@Injectable()
export class SalesService {
  constructor(private utils: UtilsService) {}

  public findSubscriptions(params: ApiParams) {
    return this.filterByQuery(SALES_DB.REPORT, params);
  }

  public findRejected(params: ApiParams) {
    return this.filterByQuery(SALES_DB.REJECTED, params);
  }

  public findProcess(params: ApiParams) {
    return this.utils.filterByPage<any>(
      SALES_DB.PROCESS,
      params?.page,
      params?.take,
    );
  }

  private filterByQuery(
    data: ResponseData[],
    params: ApiParams,
  ): ApiResponse<ResponseData> {
    const { page, take, estado, prestador, fechaDesde, fechaHasta } = params;
    let filterByProvider: ResponseData[] = [];
    const filterByDate = data.filter((res: ResponseData) =>
      this.utils.filterDate(res?.FechaVenta, fechaDesde, fechaHasta),
    );

    filterByProvider = [...filterByDate];

    if (+prestador !== 0 && !Number.isNaN(prestador)) {
      filterByProvider = filterByDate.filter(
        (res: ResponseData) => res?.idProveedor === +prestador,
      );
    }

    const filterByStatus = filterByProvider.filter(
      (res: ResponseData) => res?.idStatus === +estado || +estado === 0,
    );

    return this.utils.filterByPage<ResponseData>(filterByStatus, page, take);
  }
}
