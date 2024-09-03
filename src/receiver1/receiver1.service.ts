/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { createVerify } from 'crypto';
import { join } from 'path';

@Injectable()
export class Receiver1Service {
  private senderPublicKey = readFileSync(join(__dirname, '../../sender_public_key.pem'), 'utf8');
  private receiver1PrivateKey = readFileSync(join(__dirname, '../../receiver1_private_key.pem'), 'utf8');

  // Ici on mettra les methodes de traitement de nos webhooks

  verifyWebhook(data: any, signature: string): boolean {
    const verify = createVerify('SHA256');
    verify.update(JSON.stringify(data));
    verify.end();
    return verify.verify(this.senderPublicKey, signature, 'hex');
  }

  processWebhook(data: any, signature:string) {

    const isTrue = this.verifyWebhook(data, signature);

    if(isTrue) {
      // process Webhook

      console.log(data);
      return {success : true}
    }
    else {
      //do nothing special
      return {failure : 'Bad Signature Request'}
    }
  }



}

