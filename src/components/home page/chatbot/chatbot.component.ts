import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  showChatbox = false;
  userInput = '';
  typing = false;

  messages = [
    { sender: 'bot', text: 'Hi! I’m your assistant 👋' }
  ];

  @ViewChild('scrollContainer') scroll!: ElementRef;

  toggleChatbox() {
    this.showChatbox = !this.showChatbox;
    setTimeout(() => this.scrollToBottom(), 0);
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ sender: 'user', text: this.userInput });
    this.userInput = '';
    this.scrollToBottom();

    this.typing = true;

    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: 'This chatbot is still under development, but it will be able to answer your questions soon! 🚀'
      });
      this.typing = false;
      this.scrollToBottom();
    }, 900);
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.scroll) {
        this.scroll.nativeElement.scrollTop =
          this.scroll.nativeElement.scrollHeight;
      }
    });
  }

  renderMarkdown(text: string) {
    return marked.parse(text);
  }
}
