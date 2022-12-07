import { Module } from '@nestjs/common';
import { UtilsService } from 'src/common/utils/utils.service';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, UtilsService],
})
export class PaymentsModule {}
