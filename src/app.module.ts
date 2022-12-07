import { Module } from '@nestjs/common';

import { PaymentsModule } from './payments/payments.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [SalesModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
