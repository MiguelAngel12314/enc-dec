import { Observable } from "rxjs";
import { DecryptHttpMessageModel } from "../../../shared/models/decrypt-http-message.model";

export abstract class DecryptMessageRepository {
    abstract decrypt(text: string): Observable<DecryptHttpMessageModel>
}