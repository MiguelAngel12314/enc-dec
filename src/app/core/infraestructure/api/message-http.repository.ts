import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { MessageRepository } from "../../domain/repositoriy/message.repository";

@Injectable({ providedIn: 'root' })
export class MessageHttpRepository implements MessageRepository {
    private http = inject(HttpClient);

    /**
     * @method send
     * @param message plain text
     * @returns encrypt text  
     */
    send(message: string): Observable<void> {
        console.log(message, 'http');

        return this.http.post<void>('http://localhost:3000/api/encrypt', {
            data: message
        });
    }
}
