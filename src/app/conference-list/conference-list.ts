import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, NgClass, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTerm = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular en pratique',
      description: 'Découverte des composants, du data-binding et des pipes.',
      date: new Date('2026-12-10'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 45,
    },
    {
      id: 2,
      title: 'RxJS pour les débutants',
      description: 'Introduction à la programmation réactive avec RxJS.',
      date: new Date('2026-12-18'),
      place: 'Sfax',
      maxParticipants: 50,
      nbParticipants: 42,
    },
    {
      id: 3,
      title: 'Signals et change detection',
      description: 'Comprendre les signaux et la détection de changements.',
      date: new Date('2027-01-15'),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  get upcomingConferences(): Conference[] {
    const today = new Date();
    return this.conferences.filter(
      (c) =>
        c.date >= today &&
        c.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  placesRestantes(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  inscrire(conference: Conference): void {
    if (this.placesRestantes(conference) > 0) {
      conference.nbParticipants++;
    }
  }
}
