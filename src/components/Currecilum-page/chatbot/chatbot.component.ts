import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  showChatbox = false;
  userInput: string = '';
  messages = [{ sender: 'bot', text: 'Hello! How can I help you today?' }];

  toggleChatbox() {
    this.showChatbox = !this.showChatbox;
  }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ sender: 'user', text: this.userInput });

    const response = this.getBotResponse(this.userInput);
    this.messages.push({ sender: 'bot', text: response });

    this.userInput = '';

    setTimeout(() => {
      const chatbox = document.getElementById('chatbox-messages');
      if (chatbox) {
        chatbox.scrollTop = chatbox.scrollHeight;
      }
    }, 100);
  }

  clearChat() {
    this.messages = [
      { sender: 'bot', text: 'Hello! How can I help you today?' }
    ];
  }

  getBotResponse(input: string): string {
    const faq: { [key: string]: string } = {
      'what is your name': 'My name is Akram.',
      'what do you do': 'I am a full-stack JavaScript developer.',
      'where are you from': 'I am from Tunisia.',
      'what technologies do you use':
        'I use Angular, Node.js, PostgreSQL, and more.',
      'what is your experience':
        'I have experience building full-stack web applications.',
      'how can i contact you':
        'You can email me at akrambenaoun1993@gmail.com.',
    };

    const query = input.trim().toLowerCase();
    return (
      faq[query as keyof typeof faq] ||
      'Sorry, I don’t have an answer for that question.'
    );
  }
}
