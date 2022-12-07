import { Module } from '@nestjs/common';
import { UtilsService } from 'src/common/utils/utils.service';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  controllers: [SalesController],
  providers: [SalesService, UtilsService],
})
export class SalesModule {}
