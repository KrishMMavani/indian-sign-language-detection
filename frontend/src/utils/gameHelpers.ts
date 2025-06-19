import { Card } from '../types/game';

export const shuffleCards = (cards: Card[]): Card[] => {
  return cards.sort(() => Math.random() - 0.5);
};

export const checkMatch = (card1: Card, card2: Card): boolean => {
  return card1.content === card2.content;
};