import crypto from 'crypto';
import { LoadPrivateKey } from '../auth/service';

const loadPrivateKey = new LoadPrivateKey();

/**
 * Encrypts a string using RSA/ECB/PKCS1Padding.
 * @param {string} plainText - The text to encrypt (UTF-8).
 * @returns {string} - The encrypted string in Base64 format.
 */
export async function encryptRSA(plainText: string): Promise<string> {
  try {
    const buffer = Buffer.from(plainText, 'utf8');
    const encrypted = crypto.publicEncrypt(
      {
        key: loadPrivateKey.init(),
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      buffer
    );
    return encrypted.toString('base64');
  } catch (error) {
    throw new Error(`Encryption error: ${error}`);
  }
}

/**
 * Decrypts a Base64 encoded string using RSA.
 * @param {string} encryptedText - The encrypted text in Base64 format.
 * @returns {string} - The decrypted text.
 */
export async function decryptRSA(encryptedText: string): Promise<string> {
  try {
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        key: loadPrivateKey.init(),
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      buffer
    );
    return decrypted.toString('utf8');
  } catch (error) {
    throw new Error(`Decryption error: ${error}`);
  }
}
