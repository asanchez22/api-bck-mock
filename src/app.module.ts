import { Module } from '@nestjs/common';
import { CancellationsModule } from './cancellations/cancellations.module';
import { SalesModule } from './sales/sales.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [CancellationsModule, SalesModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
