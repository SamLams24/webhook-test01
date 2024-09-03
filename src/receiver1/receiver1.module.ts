import { Module } from '@nestjs/common';
import { Receiver1Controller } from './receiver1.controller';
import { Receiver1Service } from './receiver1.service';

@Module({
  controllers: [Receiver1Controller],
  providers: [Receiver1Service]
})
export class Receiver1Module {}
