import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SendMessageUseCase } from '../../core/use-cases/send-message.usecase';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';    
import { MatInputModule } from '@angular/material/input';   
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { DecryptMessageComponent } from '../decrypt-message/decrypt-message.component';

@Component({
  selector: 'app-encrypt-message',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgOptimizedImage
],
  templateUrl: './encrypt-message.component.html',
  styleUrl: './encrypt-message.component.scss'
})
export class EncryptMessageComponent {
  talk = signal('');
  enc_message = signal('');
  enc_text = signal('');
  isRecording = signal(false);
  recognition: any;
  readonly dialog = inject(MatDialog);
  readonly sendMessageUseCase = inject(SendMessageUseCase);
  readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.initRecognition();
  }

  /**
   * @method initRecognition
   * Function init active Recognition and transcript in real time
   */
  initRecognition() {
    if (isPlatformBrowser(this.platformId)) {
      const { webkitSpeechRecognition }: any = window as any;
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'es-MX';

      this.recognition.onresult = (event: any) => {

        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            this.talk.set(event.results[i][0].transcript);
          } else {

            interimTranscript += event.results[i][0].transcript;
            this.talk.update((prev) => {
              const newVal = (prev + ' ' + interimTranscript).trim();
              return newVal;
            });
          }
        }
      };

      this.recognition.onend = () => this.isRecording.set(false);
    }
  }

  /**
   * @method toggleMic
   * Active and disabled Mic to talk
   */
  toggleMic() {
    if (this.isRecording()) {
      this.recognition.stop();
      this.isRecording.set(false);
    } else {
      this.recognition.start();
      this.isRecording.set(true);
    }
  }

  /**
   * @method sendMessage
   * Send plain text for encrypt
   */
  sendMessage() {
    this.sendMessageUseCase.execute(this.talk())?.subscribe({
      next: (result: any) => {
        this.enc_message.set(result.encrypted);
      },
      error(err: Error) {
        console.log(err);
        
      }
    });
  }

  /**
   * @method openModal
   * Open dialog for decrypt Message
   */
  openModal() {
    this.dialog.open(DecryptMessageComponent, {
      data: {
        encryptedMessage: this.enc_message()
      },
    });
    
  }
}
