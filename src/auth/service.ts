import fs from 'node:fs';
import path from 'node:path';

export class LoadPrivateKey {
    /**
     * @function use pem file of private key
     * @returns void
     */
    init() {
        const keyPath = path.resolve(__dirname, 'private_key.pem');
      try {
        const key = fs.readFileSync(keyPath, 'utf8');
        return key;
      } catch (error: any) {
        if (error.code === 'ENOENT') {
          console.error('¡Error! No se encontró el archivo en:', error.path);
        }
        throw error;
      }
    }
}