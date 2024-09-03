/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { createSign } from 'crypto';
import axios from 'axios'
import { join } from 'path';

@Injectable()
export class SenderService {
  private senderPrivateKey = readFileSync(join(__dirname, 'sender_private_key.pem'), 'utf8');

  // Bon on mettra ici les autres methodes de traitement

  signWebhook(data: any): string {
    const sign = createSign('SHA256');
    sign.update(JSON.stringify(data));
    sign.end();
    return sign.sign(this.senderPrivateKey, 'hex');
  }

  // Envoie des Webhooks

  async sendWebhook(url: string, data: any, receiverPublicKey: string) {
    const signature = this.signWebhook(data);

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-signature': signature,
          'x-receiver-public-key': receiverPublicKey,
        },
      });

      return response.status === 200;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du webhook :', error);
      return false;
    }
  }

}

