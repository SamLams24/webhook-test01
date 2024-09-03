/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { Receiver1Module } from './receiver1/receiver1.module';
import { Receiver2Module } from './receiver2/receiver2.module';

@Module({
  imports: [SenderModule, Receiver1Module, Receiver2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
