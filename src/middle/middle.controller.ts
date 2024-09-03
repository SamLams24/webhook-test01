/* eslint-disable prettier/prettier */
import { Controller , Headers, Post, Body} from '@nestjs/common';
import { Receiver1Service } from 'src/receiver1/receiver1.service';
import { Receiver2Service } from 'src/receiver2/receiver2.service';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('middle')
export class MiddleController {
    private Receiver1PublicKey = readFileSync(join('src/receiver1/receiver1_public_key'), 'utf-8');
    private Receiver2PublicKey = readFileSync(join('src/receiver2/receiver2_public_key'), 'utf-8');
    private urlReceiver1 = 'http://localhost:3000/receiver1';
    private urlReceiver2 = 'http://localhost:3000/receiver1';
    constructor(
        private readonly receiverService1: Receiver1Service,
        private readonly receiverService2: Receiver2Service,

    ) {}

    @Post()
    async handleWebhook(@Headers('x-receiver-public-key') publicKey:string, @Headers('signature') signature:string, @Body() data: any) {
        if(publicKey === this.Receiver1PublicKey) {

            // gerer l'envoie des données a Receiver1

            const isSend = this.receiverService1.processWebhook(data, signature);

            //const isSend = axios.post(this.urlReceiver1, data);

            return isSend

        }
        else if(publicKey === this.Receiver2PublicKey) {

            //gerer l'envoie des données a Receiver2
            
            const isSend = this.receiverService2.processWebhook(data, signature)

            //const isSend = axios.post(this.urlReceiver2, data);

            return isSend
        }
        else {

            //do nothing
        }
    }
}
