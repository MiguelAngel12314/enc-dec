import { Router } from 'express';
import { EncryptionController } from '../controllers/encryptionController';
import { DecryptionController } from '../controllers/decryptionController';

const router = Router();

/**
 * POST /api/encrypt
 * Encrypt data using RSA private key
 */
router.post('/encrypt', EncryptionController.encrypt);

/**
 * POST /api/decrypt
 * Decrypt data using RSA private key
 */
router.post('/decrypt', DecryptionController.decrypt);

export default router;
