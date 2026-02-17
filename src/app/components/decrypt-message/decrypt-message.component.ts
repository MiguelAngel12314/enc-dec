import { Component, inject, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { SendEncryptMessageUseCase } from '../../core/use-cases/send-encrypt-message.usecase';
import { DecryptHttpMessageModel } from '../../shared/models/decrypt-http-message.model';
import { DialogDataModel } from '../../shared/models/DialogData.model';

@Component({
  selector: 'app-decrypt-message',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './decrypt-message.component.html',
  styleUrl: './decrypt-message.component.scss'
})
export class DecryptMessageComponent {
  isDecrypted = signal(false);
  decrytedMessage = signal('');
  readonly data = inject<DialogDataModel>(MAT_DIALOG_DATA);
  readonly sendEncryptMessageUseCase = inject(SendEncryptMessageUseCase);

  /**
   * @method decryptMessage
   * Send Message for Decrypt to Service
   */
  decryptMessage() {
    this.isDecrypted.set(true);
    this.sendEncryptMessageUseCase.execute(this.data.encryptedMessage)?.subscribe(
      {
        next: (res: DecryptHttpMessageModel) => {
              const { decrypted } = res;
              this.decrytedMessage.set(decrypted);
              console.log('decrypted', decrypted);

        },
        error(err) {
          console.log(err, 'error');
        },

      }
    )
    
  }
  
}
