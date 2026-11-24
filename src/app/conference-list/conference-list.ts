import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../Models/conference';

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
      title: 'Angular 21 Conference',
      description: 'Découverte des composants, du data-binding et des pipes.',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Comprendre les signaux et la détection de changements.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les dernières tendances du développement web.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40,
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

  inscrire(conference: Conference): void {
    if (conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }
}
