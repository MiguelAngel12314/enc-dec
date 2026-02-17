import { Observable } from "rxjs";

export abstract class MessageRepository {
    abstract send(text: string): Observable<void>
}