/* eslint-disable prettier/prettier */
// script.ts
import { generateKeyPairSync } from 'crypto';
import { writeFileSync } from 'fs';

function generateKeys(name: string) {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  writeFileSync(`${name}_public_key.pem`, publicKey);
  writeFileSync(`${name}_private_key.pem`, privateKey);
}

// Génération des clés pour Le module sender

generateKeys('sender');

console.log('LES CLE ONT ETE GENERE AVEC SUCCES');
