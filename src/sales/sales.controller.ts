import { Controller, Get, Query } from '@nestjs/common';
import { ApiParams } from 'src/common';

import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('altas')
  findAll(@Query() query: ApiParams) {
    return this.salesService.findSubscriptions(query);
  }

  @Get('rechazados')
  findAllRejected(@Query() query: ApiParams) {
    return this.salesService.findRejected(query);
  }

  @Get('novedades')
  findAllProcess(@Query() query: ApiParams) {
    return this.salesService.findProcess(query);
  }
}
