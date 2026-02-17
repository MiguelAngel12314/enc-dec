import { Routes } from '@angular/router';
import { EncryptMessageComponent } from './components/encrypt-message/encrypt-message.component';
import { DecryptMessageComponent } from './components/decrypt-message/decrypt-message.component';

export const routes: Routes = [
    {
        path: 'encrypt',
        component: EncryptMessageComponent
    },
    {
        path: 'decrypt',
        component: DecryptMessageComponent
    }
];
