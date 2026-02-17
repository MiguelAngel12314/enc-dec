import { inject, Injectable } from "@angular/core";
import { DecryptMessageRepository } from "../domain/repositoriy/decrypt-message.repository";

@Injectable({ providedIn: 'root' })
export class SendEncryptMessageUseCase {
    private repository = inject(DecryptMessageRepository);

    /**
     * @method execute
     * @param message plain text
     * @returns Observer
     */
    execute(message: string) {

        if (!message.trim()) return;
        return this.repository.decrypt(message);
    }
}
