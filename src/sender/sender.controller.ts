/* eslint-disable prettier/prettier */
import { Controller, Body, Post } from '@nestjs/common';
import { SenderService } from './sender.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('sender')
export class SenderController {

  private middleUrl = 'http://localhost:3000/middle';
  private key;
  private receiver1PublicKey = readFileSync(join(__dirname, '../../receiver1_public_key.pem'), 'utf8');
  private receiver2PublicKey = readFileSync(join(__dirname, '../../receiver2_public_key.pem'), 'utf8');

    constructor(private readonly senderService: SenderService) {}

  @Post('send-webhook')
  sendWebhook(@Body() body: any ) {
    // Envoyer le webhook après siganture
    const receiver = body.receiverKey;

    if(receiver == 1) {
      this.key = this.receiver1PublicKey;
    }
    else if(receiver == 2) {
      this.key = this.receiver2PublicKey
    }
    else {
      return {info : 'Receiver Public Key Needed'}
    }

    try {
      this.senderService.sendWebhook(this.middleUrl, body, this.key );
      return {succes : true}
    }catch(error) {
      console.error('error', error)
    }
    //const isSend = this.senderService.sendWebhook(this.middleUrl, body, key)
  }
}
