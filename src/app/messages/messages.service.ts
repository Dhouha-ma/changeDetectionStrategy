import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);
  public allMessages = this.messages.asReadonly();

  public addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
