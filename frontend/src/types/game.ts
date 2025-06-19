export interface Card {
  id: number;
  content: string;
  isMatched: boolean;
  isFlipped: boolean;
  imageUrl: string; // Added property for the image URL
}