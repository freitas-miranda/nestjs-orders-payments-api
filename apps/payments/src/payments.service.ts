import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma/prisma.service';
import { PaymentStatus } from '.prisma/client/payments';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PaymentDto } from './payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    private prismaService: PrismaService,
    @Inject('PAYMENTS_SERVICE')
    private kafkaClient: ClientKafka,
  ) {}

  all() {
    return this.prismaService.payment.findMany();
  }

  async payment(data: PaymentDto) {
    console.log('Processando pagamento! PagamentoId:', data.order_id);

    const payment = await this.prismaService.payment.create({
      data: {
        ...data,
        status: PaymentStatus.APPROVED,
      },
    });
    await lastValueFrom(this.kafkaClient.emit('payments', payment));
    return payment;
  }
}
