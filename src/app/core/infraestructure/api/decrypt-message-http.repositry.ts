import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { DecryptMessageRepository } from "../../domain/repositoriy/decrypt-message.repository";
import { DecryptHttpMessageModel } from "../../../shared/models/decrypt-http-message.model";

@Injectable({ providedIn: 'root' })
export class DecryptMessageHttpRepository implements DecryptMessageRepository {
    private http = inject(HttpClient);

    /**
     * @method decrypt
     * @param message encrypt text
     * @returns decrypted text  
     */
    decrypt(message: string): Observable<DecryptHttpMessageModel> {

        return this.http.post<DecryptHttpMessageModel>('http://localhost:3000/api/decrypt', {
            encryptedData: message
        });
    }
}
