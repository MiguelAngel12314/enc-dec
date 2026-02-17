import { inject, Injectable } from "@angular/core";
import { MessageRepository } from "../domain/repositoriy/message.repository";

@Injectable({ providedIn: 'root' })
export class SendMessageUseCase {
    private repository = inject(MessageRepository);

    /**
     * @method execute
     * @param message plain text
     * @returns Observer
     */
    execute(message: string) {

        if (!message.trim()) return;
        return this.repository.send(message);
    }
}
