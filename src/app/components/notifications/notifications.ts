import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  messages = ['Nouvelle conférence ajoutée', 'Sami vous a envoyé un message'];
  visible = false;

  afficher(): void {
    this.visible = !this.visible;
  }
}
