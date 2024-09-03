import { Module } from '@nestjs/common';
import { Receiver2Controller } from './receiver2.controller';
import { Receiver2Service } from './receiver2.service';

@Module({
  controllers: [Receiver2Controller],
  providers: [Receiver2Service]
})
export class Receiver2Module {}
