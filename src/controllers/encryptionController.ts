import { Request, Response } from 'express';
import { encryptRSA } from '../utils/encryption';

export class EncryptionController {
  /**
   * 
   * @param req {body} recive plain text
   * @param res {encrypted} return encrypted text
   * @returns 
   */
  static async encrypt(req: Request, res: Response): Promise<void> {
    try {
      const { data } = req.body;
        console.log(data);
        
      if (!data) {
        res.status(400).json({ error: 'Data is required' });
        return;
      }

      const encrypted = await encryptRSA(data);
      res.json({ encrypted });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Encryption failed' });
    }
  }
}
