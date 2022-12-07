import { Controller, Get, Query } from '@nestjs/common';
import { ApiParams } from 'src/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get('reporte')
  findAllReport(@Query() params: ApiParams) {
    return this.paymentsService.findPayments(params);
  }

  @Get('reembolsos')
  findAllRefund(@Query() params: ApiParams) {
    return this.paymentsService.findRefund(params);
  }
}
