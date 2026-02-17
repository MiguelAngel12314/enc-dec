import { Request, Response } from 'express';
import { decryptRSA } from "../utils/encryption";

export class DecryptionController {
    /**
     * 
     * @param req { body } recive encrypt text
     * @param res {decrypted} return decrypted text
     * @returns void
     */
  static async decrypt(req: Request, res: Response): Promise<void> {
    try {
      const { encryptedData } = req.body;

      if (!encryptedData) {
        res.status(400).json({ error: 'Data is required' });
        return;
      }

      const decrypted = await decryptRSA(encryptedData);
      res.json({ decrypted });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Decryption failed' });
    }
  }
}