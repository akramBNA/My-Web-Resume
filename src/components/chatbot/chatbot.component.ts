import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from './message.model';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  open = false;
  input = '';
  loading = false;

  messages: ChatMessage[] = [
    { role: 'assistant', content: 'Hey 👋 How can I help?' }
  ];

  @ViewChild('scroll') scroll!: ElementRef;

  constructor(private chat: ChatService) {}

  toggle() {
    this.open = !this.open;
  }

  send() {
    if (!this.input.trim()) return;

    this.messages.push({ role: 'user', content: this.input });
    this.loading = true;

    this.chat.sendMessage(this.input).subscribe(res => {
      this.messages.push(res);
      this.loading = false;
      this.scrollToBottom();
    });

    this.input = '';
  }

  private scrollToBottom() {
    setTimeout(() =>
      this.scroll.nativeElement.scrollTop =
      this.scroll.nativeElement.scrollHeight
    );
  }
}
