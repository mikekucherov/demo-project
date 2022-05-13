import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  cards = [];

  constructor() {}

  refreshCards() {
    const currentCards = [...this.cards];
    setTimeout(() => {
      this.cards = currentCards.map(card => `${card}[UPD]`);
    }, 2000);

    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  createCard() {
    const currentCards = [...this.cards];
    setTimeout(() => {
      this.cards.push(currentCards.length);
    }, 2000);

    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  deleteCard(cardId) {
    const currentCards = [...this.cards];
    setTimeout(() => {
      this.cards = currentCards.filter(card => card !== cardId);
    }, 2000);

    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
