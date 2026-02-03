import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ChatMessage } from '../components/chatbot/message.model';

@Injectable({ providedIn: 'root' })
export class ChatService {

  sendMessage(message: string): Observable<ChatMessage> {
    return of({
      role: 'assistant',
      content: this.fakeAI(message)
    } as ChatMessage).pipe(delay(800));
  }

  private fakeAI(input: string): string {
    const q = input.toLowerCase();

    if (q.includes('name')) return 'I’m Akram’s AI assistant 🤖';
    if (q.includes('contact')) return 'You can reach Akram via email.';
    if (q.includes('tech')) return 'Angular, Node.js, PostgreSQL, Docker.';
    return 'Interesting question 👀 Tell me more.';
  }
}
