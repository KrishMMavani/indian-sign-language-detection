export interface QuizQuestion {
  id: string;
  question: string;
  imageUrl?: string; // Add this property to support question images
  videoUrl?: string; // Added videoUrl property
  options: Array<{ number?: string; imageUrl?: string; videoUrl?: string }>;
  correctAnswer: string;
}

export interface Quiz {
  id: string;
  title: string;
  completed?: boolean;
  score?: number;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  quizId: string;
  score: number;
  timestamp: Date;
}

export interface Category {
  id: string;
  quizzes: Quiz[];
}

export interface LearningModule {
  numbers: Quiz[];
  alphabets: Quiz[];
  words: Quiz[];
  categories: Category[];
  progress: {
    completed: number;
    total: number;
  };
  attempts: QuizAttempt[];
}

export interface LevelModule {
  easy: Quiz[];
  medium: Quiz[];
  hard: Quiz[];
  attempts: QuizAttempt[];
}

export const learningModuleQuestions = {
  numbers: [
    {
      id: 'num1',
      title: 'Think the Number (1-10)',
      
      questions: [
        {
          id: 'q1',
          question: 'What number does this sign represent?',
          imageUrl: '../images/5.jpg',
          options: [
            { number: '3' },
            { number: '5' },
            { number: '8' },
            { number: '2' },
          ],
          correctAnswer: '5',
        },
        {
          id: 'q2',
          question: 'What number is shown in this image?',
          imageUrl: '../images/3.jpg',
          options: [
            { number: '1' },
            { number: '3' },
            { number: '7' },
            { number: '4' },
          ],
          correctAnswer: '3',
        },
        {
          id: 'q3',
          question: 'What image represents the number 1?',
          options: [
            { imageUrl: '../images/1.jpg' },
            { imageUrl: '../images/5.jpg' },
            { imageUrl: '../images/7.jpg' },
            { imageUrl: '../images/3.jpg' },
          ],
          correctAnswer: '../images/1.jpg',
        },
        {
          id: 'q4',
          question: 'Identify the number in the image.',
          imageUrl: '../images/8.jpg',
          options: [
            { number: '2' },
            { number: '6' },
            { number: '8' },
            { number: '4' },
          ],
          correctAnswer: '8',
        },
        {
          id: 'q5',
          question: 'What image represents the number 5?',
          options: [
            { imageUrl: '../images/9.jpg', number: '1' },
            { imageUrl: '../images/5.jpg', number: '5' },
            { imageUrl: '../images/2.jpg', number: '7' },
            { imageUrl: '../images/6.jpg', number: '3' },
          ],
          correctAnswer: '../images/5.jpg',
        },
        {
          id: 'q6',
          question: 'What image represents the number 7?',
          options: [
            { imageUrl: '../images/4.jpg', number: '1' },
            { imageUrl: '../images/8.jpg', number: '5' },
            { imageUrl: '../images/7.jpg', number: '7' },
            { imageUrl: '../images/3.jpg', number: '3' },
          ],
          correctAnswer: '../images/7.jpg',
        },
        {
          id: 'q7',
          question: 'What number is represented by this image?',
          imageUrl: '../images/2.jpg',
          options: [
            { number: '9' },
            { number: '2' },
            { number: '5' },
            { number: '3' },
          ],
          correctAnswer: '2',
        },
        {
          id: 'q8',
          question: 'Which number corresponds to the image?',
          imageUrl: '../images/6.jpg',
          options: [
            { number: '1' },
            { number: '4' },
            { number: '6' },
            { number: '0' },
          ],
          correctAnswer: '6',
        },
        {
          id: 'q9',
          question: 'What image represents the number 3?',
          options: [
            { imageUrl: '../images/1.jpg' },
            { imageUrl: '../images/5.jpg' },
            { imageUrl: '../images/7.jpg' },
            { imageUrl: '../images/3.jpg' },
          ],
          correctAnswer: '../images/3.jpg',
        },
        {
          id: 'q10',
          question: 'What image represents the number 4?',
          options: [
            { imageUrl: '../images/1.jpg' },
            { imageUrl: '../images/5.jpg' },
            { imageUrl: '../images/7.jpg' },
            { imageUrl: '../images/4.jpg' },
          ],
          correctAnswer: '../images/4.jpg',
        },
      ],
    },
  ],
  alphabets: [
    {
      id: 'alpha1',
      title: 'Basic Alphabets',
      questions: [
        {
          id: 'q1',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/A.jpg',
          options: [{ number: 'A' }, { number: 'B' }, { number: 'C' }, { number: 'D' }],
          correctAnswer: 'A',
        },
        {
          id: 'q2',
          question: 'Which image represents the letter P?',
          options: [
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/A.jpg' },
            { imageUrl: '../images/P.jpg' },
            { imageUrl: '../images/S.jpg' },
          ],
          correctAnswer: '../images/P.jpg',
        },
        {
          id: 'q3',
          question: 'Which image represents the letter V?',
          options: [
            { imageUrl: '../images/V.jpg' },
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/Y.jpg' },
            { imageUrl: '../images/W.jpg' },
          ],
          correctAnswer: '../images/V.jpg',
        },
        {
          id: 'q4',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/D.jpg',
          options: [{ number: 'B' }, { number: 'D' }, { number: 'F' }, { number: 'H' }],
          correctAnswer: 'D',
        },
        {
          id: 'q5',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/E.jpg',
          options: [{ number: 'I' }, { number: 'G' }, { number: 'H' }, { number: 'E' }],
          correctAnswer: 'E',
        },
        {
          id: 'q6',
          question: 'Which image represents the letter Z?',
          options: [
            { imageUrl: '../images/Q.jpg' },
            { imageUrl: '../images/Z.jpg' },
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/M.jpg' },
          ],
          correctAnswer: '../images/Z.jpg',
        },
        {
          id: 'q7',
          question: 'Which image represents the letter K?',
          options: [
            { imageUrl: '../images/O.jpg' },
            { imageUrl: '../images/I.jpg' },
            { imageUrl: '../images/F.jpg' },
            { imageUrl: '../images/K.jpg' },
          ],
          correctAnswer: 'K',
        },
        {
          id: 'q8',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/H.jpg',
          options: [{ number: 'F' }, { number: 'H' }, { number: 'K' }, { number: 'M' }],
          correctAnswer: 'H',
        },
        {
          id: 'q9',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/I.jpg',
          options: [{ number: 'I' }, { number: 'J' }, { number: 'L' }, { number: 'N' }],
          correctAnswer: 'I',
        },
        {
          id: 'q10',
          question: 'Which image represents the letter T?',
          options: [
            { imageUrl: '../images/S.jpg' },
            { imageUrl: '../images/T.jpg' },
            { imageUrl: '../images/U.jpg' },
            { imageUrl: '../images/V.jpg' },
          ],
          correctAnswer: '../images/T.jpg',
        },
        {
          id: 'q11',
          question: 'Which image represents the letter R?',
          options: [
            { imageUrl: '../images/Q.jpg' },
            { imageUrl: '../images/R.jpg' },
            { imageUrl: '../images/S.jpg' },
            { imageUrl: '../images/T.jpg' },
          ],
          correctAnswer: '../images/R.jpg',
        },
        {
          id: 'q12',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/L.jpg',
          options: [{ number: 'I' }, { number: 'L' }, { number: 'P' }, { number: 'R' }],
          correctAnswer: 'L',
        },
        {
          id: 'q13',
          question: 'Which image represents the letter Y?',
          options: [
            { imageUrl: '../images/W.jpg' },
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/Y.jpg' },
            { imageUrl: '../images/Z.jpg' },
          ],
          correctAnswer: 'Y',
        },
        
        {
          id: 'q14',
          question: 'Which image represents the letter N?',
          options: [
            { imageUrl: '../images/C.jpg' },
            { imageUrl: '../images/G.jpg' },
            { imageUrl: '../images/N.jpg' },
            { imageUrl: '../images/Q.jpg' },
          ],
          correctAnswer: 'N',
        },
        {
          id: 'q15',
          question: 'Which letter is shown in the image?',
          imageUrl: '../images/M.jpg',
          options: [{ number: 'M' }, { number: 'N' }, { number: 'Q' }, { number: 'S' }],
          correctAnswer: 'M',
        },
      ],
    },
  ],
  words: [
    {
      id: 'word-a1',
      title: 'Words starting with A',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Apple"?',
          options: [
            { videoUrl: '/videos/A/APPLE.mp4' },
            { videoUrl: '/videos/A/ANCHOR.mp4' },
            { videoUrl: '/videos/A/ANT.mp4' },
            { videoUrl: '/videos/A/ARROW.mp4' },
          ],
          correctAnswer: '/videos/A/APPLE.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/A/ANT.mp4',
          options: [
            { number: 'Apple' },
            { number: 'Anchor' },
            { number: 'Ant' },
            { number: 'Arrow' },
          ],
          correctAnswer: 'Ant',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Anchor"?',
          options: [
            { videoUrl: '/videos/A/APPLE.mp4' },
            { videoUrl: '/videos/A/ANCHOR.mp4' },
            { videoUrl: '/videos/A/ANT.mp4' },
            { videoUrl: '/videos/A/ARROW.mp4' },
          ],
          correctAnswer: '/videos/A/ANCHOR.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Arrow"?',
          options: [
            { videoUrl: '/videos/A/APPLE.mp4' },
            { videoUrl: '/videos/A/ANCHOR.mp4' },
            { videoUrl: '/videos/A/ARROW.mp4' },
            { videoUrl: '/videos/A/ARTIST.mp4' },
          ],
          correctAnswer: '/videos/A/ARROW.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/A/ARTIST.mp4',
          options: [
            { number: 'Apple' },
            { number: 'Anchor' },
            { number: 'Arrow' },
            { number: 'Artist' },
          ],
          correctAnswer: 'Artist',
        },
      ],
    },
    {
      id: 'word-b1',
      title: 'Words starting with B',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Banana"?',
          options: [
            { videoUrl: '/videos/B/BANANA.mp4' },
            { videoUrl: '/videos/B/BALL.mp4' },
            { videoUrl: '/videos/B/BASKET.mp4' },
            { videoUrl: '/videos/B/BRIDGE.mp4' },
          ],
          correctAnswer: '/videos/B/BANANA.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/B/BALL.mp4',
          options: [
            { number: 'Banana' },
            { number: 'Ball' },
            { number: 'Basket' },
            { number: 'Bridge' },
          ],
          correctAnswer: 'Ball',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Basket"?',
          options: [
            { videoUrl: '/videos/B/BANANA.mp4' },
            { videoUrl: '/videos/B/BALL.mp4' },
            { videoUrl: '/videos/B/BASKET.mp4' },
            { videoUrl: '/videos/B/BRIDGE.mp4' },
          ],
          correctAnswer: '/videos/B/BASKET.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Bridge"?',
          options: [
            { videoUrl: '/videos/B/BANANA.mp4' },
            { videoUrl: '/videos/B/BALL.mp4' },
            { videoUrl: '/videos/B/BASKET.mp4' },
            { videoUrl: '/videos/B/BRIDGE.mp4' },
          ],
          correctAnswer: '/videos/B/BRIDGE.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/B/BUTTERFLY.mp4',
          options: [
            { number: 'Banana' },
            { number: 'Ball' },
            { number: 'Basket' },
            { number: 'Butterfly' },
          ],
          correctAnswer: 'Butterfly',
        },
      ],
    },
    {
      id: 'word-c1',
      title: 'Words starting with C',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Cat"?',
          options: [
            { videoUrl: '/videos/C/CAT.mp4' },
            { videoUrl: '/videos/C/CHAIR.mp4' },
            { videoUrl: '/videos/C/CIRCLE.mp4' },
            { videoUrl: '/videos/C/CLOUD.mp4' },
          ],
          correctAnswer: '/videos/C/CAT.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/C/CHAIR.mp4',
          options: [
            { number: 'Cat' },
            { number: 'Chair' },
            { number: 'Circle' },
            { number: 'Cloud' },
          ],
          correctAnswer: 'Chair',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Circle"?',
          options: [
            { videoUrl: '/videos/C/CAT.mp4' },
            { videoUrl: '/videos/C/CHAIR.mp4' },
            { videoUrl: '/videos/C/CIRCLE.mp4' },
            { videoUrl: '/videos/C/CLOUD.mp4' },
          ],
          correctAnswer: '/videos/C/CIRCLE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Cloud"?',
          options: [
            { videoUrl: '/videos/C/CAT.mp4' },
            { videoUrl: '/videos/C/CHAIR.mp4' },
            { videoUrl: '/videos/C/CIRCLE.mp4' },
            { videoUrl: '/videos/C/CLOUD.mp4' },
          ],
          correctAnswer: '/videos/C/CLOUD.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/C/CANDLE.mp4',
          options: [
            { number: 'Cat' },
            { number: 'Chair' },
            { number: 'Circle' },
            { number: 'Candle' },
          ],
          correctAnswer: 'Candle',
        },
      ],
    },
    {
      id: 'word-d1',
      title: 'Words starting with D',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Dog"?',
          options: [
            { videoUrl: '/videos/D/DOG.mp4' },
            { videoUrl: '/videos/D/DRUM.mp4' },
            { videoUrl: '/videos/D/DIAMOND.mp4' },
            { videoUrl: '/videos/D/DOOR.mp4' },
          ],
          correctAnswer: '/videos/D/DOG.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/D/DRUM.mp4',
          options: [
            { number: 'Dog' },
            { number: 'Drum' },
            { number: 'Diamond' },
            { number: 'Door' },
          ],
          correctAnswer: 'Drum',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Diamond"?',
          options: [
            { videoUrl: '/videos/D/DOG.mp4' },
            { videoUrl: '/videos/D/DRUM.mp4' },
            { videoUrl: '/videos/D/DIAMOND.mp4' },
            { videoUrl: '/videos/D/DOOR.mp4' },
          ],
          correctAnswer: '/videos/D/DIAMOND.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Door"?',
          options: [
            { videoUrl: '/videos/D/DOG.mp4' },
            { videoUrl: '/videos/D/DRUM.mp4' },
            { videoUrl: '/videos/D/DIAMOND.mp4' },
            { videoUrl: '/videos/D/DOOR.mp4' },
          ],
          correctAnswer: '/videos/D/DOOR.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/D/DOLPHIN.mp4',
          options: [
            { number: 'Dog' },
            { number: 'Drum' },
            { number: 'Diamond' },
            { number: 'Dolphin' },
          ],
          correctAnswer: 'Dolphin',
        },
      ],
    },
    {
      id: 'word-e1',
      title: 'Words starting with E',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Elephant"?',
          options: [
            { videoUrl: '/videos/E/ELEPHANT.mp4' },
            { videoUrl: '/videos/E/EGG.mp4' },
            { videoUrl: '/videos/E/ENGINE.mp4' },
            { videoUrl: '/videos/E/ENVELOPE.mp4' },
          ],
          correctAnswer: '/videos/E/ELEPHANT.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/E/EGG.mp4',
          options: [
            { number: 'Elephant' },
            { number: 'Egg' },
            { number: 'Engine' },
            { number: 'Envelope' },
          ],
          correctAnswer: 'Egg',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Engine"?',
          options: [
            { videoUrl: '/videos/E/ELEPHANT.mp4' },
            { videoUrl: '/videos/E/EGG.mp4' },
            { videoUrl: '/videos/E/ENGINE.mp4' },
            { videoUrl: '/videos/E/ENVELOPE.mp4' },
          ],
          correctAnswer: '/videos/E/ENGINE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Envelope"?',
          options: [
            { videoUrl: '/videos/E/ELEPHANT.mp4' },
            { videoUrl: '/videos/E/EGG.mp4' },
            { videoUrl: '/videos/E/ENGINE.mp4' },
            { videoUrl: '/videos/E/ENVELOPE.mp4' },
          ],
          correctAnswer: '/videos/E/ENVELOPE.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/E/EAGLE.mp4',
          options: [
            { number: 'Elephant' },
            { number: 'Egg' },
            { number: 'Engine' },
            { number: 'Eagle' },
          ],
          correctAnswer: 'Eagle',
        },
      ],
    },
    {
      id: 'word-f1',
      title: 'Words starting with F',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Fish"?',
          options: [
            { videoUrl: '/videos/F/FISH.mp4' },
            { videoUrl: '/videos/F/FROG.mp4' },
            { videoUrl: '/videos/F/FLOWER.mp4' },
            { videoUrl: '/videos/F/FLAG.mp4' },
          ],
          correctAnswer: '/videos/F/FISH.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/F/FROG.mp4',
          options: [
            { number: 'Fish' },
            { number: 'Frog' },
            { number: 'Flower' },
            { number: 'Flag' },
          ],
          correctAnswer: 'Frog',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Flower"?',
          options: [
            { videoUrl: '/videos/F/FISH.mp4' },
            { videoUrl: '/videos/F/FROG.mp4' },
            { videoUrl: '/videos/F/FLOWER.mp4' },
            { videoUrl: '/videos/F/FLAG.mp4' },
          ],
          correctAnswer: '/videos/F/FLOWER.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Flag"?',
          options: [
            { videoUrl: '/videos/F/FISH.mp4' },
            { videoUrl: '/videos/F/FROG.mp4' },
            { videoUrl: '/videos/F/FLOWER.mp4' },
            { videoUrl: '/videos/F/FLAG.mp4' },
          ],
          correctAnswer: '/videos/F/FLAG.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/F/FIRE.mp4',
          options: [
            { number: 'Fish' },
            { number: 'Frog' },
            { number: 'Flower' },
            { number: 'Fire' },
          ],
          correctAnswer: 'Fire',
        },
      ],
    },
    {
      id: 'word-h1',
      title: 'Words starting with H',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Hat"?',
          options: [
            { videoUrl: '/videos/H/HAT.mp4' },
            { videoUrl: '/videos/H/HOUSE.mp4' },
            { videoUrl: '/videos/H/HORSE.mp4' },
            { videoUrl: '/videos/H/HAND.mp4' },
          ],
          correctAnswer: '/videos/H/HAT.mp4',
        },
        {
          id: 'q2',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/H/HOUSE.mp4',
          options: [
            { number: 'Hat' },
            { number: 'House' },
            { number: 'Horse' },
            { number: 'Hand' },
          ],
          correctAnswer: 'House',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Horse"?',
          options: [
            { videoUrl: '/videos/H/HAT.mp4' },
            { videoUrl: '/videos/H/HOUSE.mp4' },
            { videoUrl: '/videos/H/HORSE.mp4' },
            { videoUrl: '/videos/H/HAND.mp4' },
          ],
          correctAnswer: '/videos/H/HORSE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Hand"?',
          options: [
            { videoUrl: '/videos/H/HAT.mp4' },
            { videoUrl: '/videos/H/HOUSE.mp4' },
            { videoUrl: '/videos/H/HORSE.mp4' },
            { videoUrl: '/videos/H/HAND.mp4' },
          ],
          correctAnswer: '/videos/H/HAND.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/H/HEART.mp4',
          options: [
            { number: 'Hat' },
            { number: 'House' },
            { number: 'Horse' },
            { number: 'Heart' },
          ],
          correctAnswer: 'Heart',
        },
      ],
    },
    {
      id: 'word-i1',
      title: 'Words starting with I',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Ice"?',
          options: [
            { videoUrl: '/videos/I/ICE.mp4' },
            { videoUrl: '/videos/I/INK.mp4' },
            { videoUrl: '/videos/I/IRON.mp4' },
            { videoUrl: '/videos/I/ISLAND.mp4' },
          ],
          correctAnswer: '/videos/I/ICE.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Ink"?',
          options: [
            { videoUrl: '/videos/I/ICE.mp4' },
            { videoUrl: '/videos/I/INK.mp4' },
            { videoUrl: '/videos/I/IRON.mp4' },
            { videoUrl: '/videos/I/ISLAND.mp4' },
          ],
          correctAnswer: '/videos/I/INK.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Iron"?',
          options: [
            { videoUrl: '/videos/I/ICE.mp4' },
            { videoUrl: '/videos/I/INK.mp4' },
            { videoUrl: '/videos/I/IRON.mp4' },
            { videoUrl: '/videos/I/ISLAND.mp4' },
          ],
          correctAnswer: '/videos/I/IRON.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Island"?',
          options: [
            { videoUrl: '/videos/I/ICE.mp4' },
            { videoUrl: '/videos/I/INK.mp4' },
            { videoUrl: '/videos/I/IRON.mp4' },
            { videoUrl: '/videos/I/ISLAND.mp4' },
          ],
          correctAnswer: '/videos/I/ISLAND.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/I/IVORY.mp4',
          options: [
            { number: 'Ice' },
            { number: 'Ink' },
            { number: 'Iron' },
            { number: 'Ivory' },
          ],
          correctAnswer: 'Ivory',
        },
      ],
    },
    {
      id: 'word-j1',
      title: 'Words starting with J',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Jam"?',
          options: [
            { videoUrl: '/videos/J/JAM.mp4' },
            { videoUrl: '/videos/J/JAR.mp4' },
            { videoUrl: '/videos/J/JEEP.mp4' },
            { videoUrl: '/videos/J/JUMP.mp4' },
          ],
          correctAnswer: '/videos/J/JAM.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Jar"?',
          options: [
            { videoUrl: '/videos/J/JAM.mp4' },
            { videoUrl: '/videos/J/JAR.mp4' },
            { videoUrl: '/videos/J/JEEP.mp4' },
            { videoUrl: '/videos/J/JUMP.mp4' },
          ],
          correctAnswer: '/videos/J/JAR.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Jeep"?',
          options: [
            { videoUrl: '/videos/J/JAM.mp4' },
            { videoUrl: '/videos/J/JAR.mp4' },
            { videoUrl: '/videos/J/JEEP.mp4' },
            { videoUrl: '/videos/J/JUMP.mp4' },
          ],
          correctAnswer: '/videos/J/JEEP.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Jump"?',
          options: [
            { videoUrl: '/videos/J/JAM.mp4' },
            { videoUrl: '/videos/J/JAR.mp4' },
            { videoUrl: '/videos/J/JEEP.mp4' },
            { videoUrl: '/videos/J/JUMP.mp4' },
          ],
          correctAnswer: '/videos/J/JUMP.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/J/JUG.mp4',
          options: [
            { number: 'Jam' },
            { number: 'Jar' },
            { number: 'Jeep' },
            { number: 'Jug' },
          ],
          correctAnswer: 'Jug',
        },
      ],
    },
    {
      id: 'word-k1',
      title: 'Words starting with K',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Kite"?',
          options: [
            { videoUrl: '/videos/K/KITE.mp4' },
            { videoUrl: '/videos/K/KEY.mp4' },
            { videoUrl: '/videos/K/KANGAROO.mp4' },
            { videoUrl: '/videos/K/KITCHEN.mp4' },
          ],
          correctAnswer: '/videos/K/KITE.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Key"?',
          options: [
            { videoUrl: '/videos/K/KITE.mp4' },
            { videoUrl: '/videos/K/KEY.mp4' },
            { videoUrl: '/videos/K/KANGAROO.mp4' },
            { videoUrl: '/videos/K/KITCHEN.mp4' },
          ],
          correctAnswer: '/videos/K/KEY.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Kangaroo"?',
          options: [
            { videoUrl: '/videos/K/KITE.mp4' },
            { videoUrl: '/videos/K/KEY.mp4' },
            { videoUrl: '/videos/K/KANGAROO.mp4' },
            { videoUrl: '/videos/K/KITCHEN.mp4' },
          ],
          correctAnswer: '/videos/K/KANGAROO.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Kitchen"?',
          options: [
            { videoUrl: '/videos/K/KITE.mp4' },
            { videoUrl: '/videos/K/KEY.mp4' },
            { videoUrl: '/videos/K/KANGAROO.mp4' },
            { videoUrl: '/videos/K/KITCHEN.mp4' },
          ],
          correctAnswer: '/videos/K/KITCHEN.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/K/KNIFE.mp4',
          options: [
            { number: 'Kite' },
            { number: 'Key' },
            { number: 'Kangaroo' },
            { number: 'Knife' },
          ],
          correctAnswer: 'Knife',
        },
      ],
    },
    {
      id: 'word-l1',
      title: 'Words starting with L',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Lion"?',
          options: [
            { videoUrl: '/videos/L/LION.mp4' },
            { videoUrl: '/videos/L/LAMP.mp4' },
            { videoUrl: '/videos/L/LEMON.mp4' },
            { videoUrl: '/videos/L/LADDER.mp4' },
          ],
          correctAnswer: '/videos/L/LION.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Lamp"?',
          options: [
            { videoUrl: '/videos/L/LION.mp4' },
            { videoUrl: '/videos/L/LAMP.mp4' },
            { videoUrl: '/videos/L/LEMON.mp4' },
            { videoUrl: '/videos/L/LADDER.mp4' },
          ],
          correctAnswer: '/videos/L/LAMP.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Lemon"?',
          options: [
            { videoUrl: '/videos/L/LION.mp4' },
            { videoUrl: '/videos/L/LAMP.mp4' },
            { videoUrl: '/videos/L/LEMON.mp4' },
            { videoUrl: '/videos/L/LADDER.mp4' },
          ],
          correctAnswer: '/videos/L/LEMON.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Ladder"?',
          options: [
            { videoUrl: '/videos/L/LION.mp4' },
            { videoUrl: '/videos/L/LAMP.mp4' },
            { videoUrl: '/videos/L/LEMON.mp4' },
            { videoUrl: '/videos/L/LADDER.mp4' },
          ],
          correctAnswer: '/videos/L/LADDER.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/L/LOCK.mp4',
          options: [
            { number: 'Lion' },
            { number: 'Lamp' },
            { number: 'Lemon' },
            { number: 'Lock' },
          ],
          correctAnswer: 'Lock',
        },
      ],
    },
    {
      id: 'word-m1',
      title: 'Words starting with M',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Monkey"?',
          options: [
            { videoUrl: '/videos/M/MONKEY.mp4' },
            { videoUrl: '/videos/M/MANGO.mp4' },
            { videoUrl: '/videos/M/MOUNTAIN.mp4' },
            { videoUrl: '/videos/M/MOON.mp4' },
          ],
          correctAnswer: '/videos/M/MONKEY.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Mango"?',
          options: [
            { videoUrl: '/videos/M/MONKEY.mp4' },
            { videoUrl: '/videos/M/MANGO.mp4' },
            { videoUrl: '/videos/M/MOUNTAIN.mp4' },
            { videoUrl: '/videos/M/MOON.mp4' },
          ],
          correctAnswer: '/videos/M/MANGO.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Mountain"?',
          options: [
            { videoUrl: '/videos/M/MONKEY.mp4' },
            { videoUrl: '/videos/M/MANGO.mp4' },
            { videoUrl: '/videos/M/MOUNTAIN.mp4' },
            { videoUrl: '/videos/M/MOON.mp4' },
          ],
          correctAnswer: '/videos/M/MOUNTAIN.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Moon"?',
          options: [
            { videoUrl: '/videos/M/MONKEY.mp4' },
            { videoUrl: '/videos/M/MANGO.mp4' },
            { videoUrl: '/videos/M/MOUNTAIN.mp4' },
            { videoUrl: '/videos/M/MOON.mp4' },
          ],
          correctAnswer: '/videos/M/MOON.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/M/MIRROR.mp4',
          options: [
            { number: 'Monkey' },
            { number: 'Mango' },
            { number: 'Mountain' },
            { number: 'Mirror' },
          ],
          correctAnswer: 'Mirror',
        },
      ],
    },
    {
      id: 'word-n1',
      title: 'Words starting with N',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Nest"?',
          options: [
            { videoUrl: '/videos/N/NEST.mp4' },
            { videoUrl: '/videos/N/NET.mp4' },
            { videoUrl: '/videos/N/NEEDLE.mp4' },
            { videoUrl: '/videos/N/NOTEBOOK.mp4' },
          ],
          correctAnswer: '/videos/N/NEST.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Net"?',
          options: [
            { videoUrl: '/videos/N/NEST.mp4' },
            { videoUrl: '/videos/N/NET.mp4' },
            { videoUrl: '/videos/N/NEEDLE.mp4' },
            { videoUrl: '/videos/N/NOTEBOOK.mp4' },
          ],
          correctAnswer: '/videos/N/NET.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Needle"?',
          options: [
            { videoUrl: '/videos/N/NEST.mp4' },
            { videoUrl: '/videos/N/NET.mp4' },
            { videoUrl: '/videos/N/NEEDLE.mp4' },
            { videoUrl: '/videos/N/NOTEBOOK.mp4' },
          ],
          correctAnswer: '/videos/N/NEEDLE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Notebook"?',
          options: [
            { videoUrl: '/videos/N/NEST.mp4' },
            { videoUrl: '/videos/N/NET.mp4' },
            { videoUrl: '/videos/N/NEEDLE.mp4' },
            { videoUrl: '/videos/N/NOTEBOOK.mp4' },
          ],
          correctAnswer: '/videos/N/NOTEBOOK.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/N/NUMBER.mp4',
          options: [
            { number: 'Nest' },
            { number: 'Net' },
            { number: 'Needle' },
            { number: 'Number' },
          ],
          correctAnswer: 'Number',
        },
      ],
    },
    {
      id: 'word-o1',
      title: 'Words starting with O',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Orange"?',
          options: [
            { videoUrl: '/videos/O/ORANGE.mp4' },
            { videoUrl: '/videos/O/OWL.mp4' },
            { videoUrl: '/videos/O/OCEAN.mp4' },
            { videoUrl: '/videos/O/ONION.mp4' },
          ],
          correctAnswer: '/videos/O/ORANGE.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Owl"?',
          options: [
            { videoUrl: '/videos/O/ORANGE.mp4' },
            { videoUrl: '/videos/O/OWL.mp4' },
            { videoUrl: '/videos/O/OCEAN.mp4' },
            { videoUrl: '/videos/O/ONION.mp4' },
          ],
          correctAnswer: '/videos/O/OWL.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Ocean"?',
          options: [
            { videoUrl: '/videos/O/ORANGE.mp4' },
            { videoUrl: '/videos/O/OWL.mp4' },
            { videoUrl: '/videos/O/OCEAN.mp4' },
            { videoUrl: '/videos/O/ONION.mp4' },
          ],
          correctAnswer: '/videos/O/OCEAN.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Onion"?',
          options: [
            { videoUrl: '/videos/O/ORANGE.mp4' },
            { videoUrl: '/videos/O/OWL.mp4' },
            { videoUrl: '/videos/O/OCEAN.mp4' },
            { videoUrl: '/videos/O/ONION.mp4' },
          ],
          correctAnswer: '/videos/O/ONION.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/O/OCTOPUS.mp4',
          options: [
            { number: 'Orange' },
            { number: 'Owl' },
            { number: 'Ocean' },
            { number: 'Octopus' },
          ],
          correctAnswer: 'Octopus',
        },
      ],
    },
    {
      id: 'word-p1',
      title: 'Words starting with P',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Pen"?',
          options: [
            { videoUrl: '/videos/P/PEN.mp4' },
            { videoUrl: '/videos/P/PENCIL.mp4' },
            { videoUrl: '/videos/P/PARROT.mp4' },
            { videoUrl: '/videos/P/PLANE.mp4' },
          ],
          correctAnswer: '/videos/P/PEN.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Pencil"?',
          options: [
            { videoUrl: '/videos/P/PEN.mp4' },
            { videoUrl: '/videos/P/PENCIL.mp4' },
            { videoUrl: '/videos/P/PARROT.mp4' },
            { videoUrl: '/videos/P/PLANE.mp4' },
          ],
          correctAnswer: '/videos/P/PENCIL.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Parrot"?',
          options: [
            { videoUrl: '/videos/P/PEN.mp4' },
            { videoUrl: '/videos/P/PENCIL.mp4' },
            { videoUrl: '/videos/P/PARROT.mp4' },
            { videoUrl: '/videos/P/PLANE.mp4' },
          ],
          correctAnswer: '/videos/P/PARROT.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Plane"?',
          options: [
            { videoUrl: '/videos/P/PEN.mp4' },
            { videoUrl: '/videos/P/PENCIL.mp4' },
            { videoUrl: '/videos/P/PARROT.mp4' },
            { videoUrl: '/videos/P/PLANE.mp4' },
          ],
          correctAnswer: '/videos/P/PLANE.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/P/PLANT.mp4',
          options: [
            { number: 'Pen' },
            { number: 'Pencil' },
            { number: 'Parrot' },
            { number: 'Plant' },
          ],
          correctAnswer: 'Plant',
        },
      ],
    },
    {
      id: 'word-q1',
      title: 'Words starting with Q',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Queen"?',
          options: [
            { videoUrl: '/videos/Q/QUEEN.mp4' },
            { videoUrl: '/videos/Q/QUILT.mp4' },
            { videoUrl: '/videos/Q/QUIZ.mp4' },
            { videoUrl: '/videos/Q/QUAIL.mp4' },
          ],
          correctAnswer: '/videos/Q/QUEEN.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Quilt"?',
          options: [
            { videoUrl: '/videos/Q/QUEEN.mp4' },
            { videoUrl: '/videos/Q/QUILT.mp4' },
            { videoUrl: '/videos/Q/QUIZ.mp4' },
            { videoUrl: '/videos/Q/QUAIL.mp4' },
          ],
          correctAnswer: '/videos/Q/QUILT.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Quiz"?',
          options: [
            { videoUrl: '/videos/Q/QUEEN.mp4' },
            { videoUrl: '/videos/Q/QUILT.mp4' },
            { videoUrl: '/videos/Q/QUIZ.mp4' },
            { videoUrl: '/videos/Q/QUAIL.mp4' },
          ],
          correctAnswer: '/videos/Q/QUIZ.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Quail"?',
          options: [
            { videoUrl: '/videos/Q/QUEEN.mp4' },
            { videoUrl: '/videos/Q/QUILT.mp4' },
            { videoUrl: '/videos/Q/QUIZ.mp4' },
            { videoUrl: '/videos/Q/QUAIL.mp4' },
          ],
          correctAnswer: '/videos/Q/QUAIL.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/Q/QUICK.mp4',
          options: [
            { number: 'Queen' },
            { number: 'Quilt' },
            { number: 'Quiz' },
            { number: 'Quick' },
          ],
          correctAnswer: 'Quick',
        },
      ],
    },
    {
      id: 'word-r1',
      title: 'Words starting with R',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Rabbit"?',
          options: [
            { videoUrl: '/videos/R/RABBIT.mp4' },
            { videoUrl: '/videos/R/RAIN.mp4' },
            { videoUrl: '/videos/R/ROSE.mp4' },
            { videoUrl: '/videos/R/ROBOT.mp4' },
          ],
          correctAnswer: '/videos/R/RABBIT.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Rain"?',
          options: [
            { videoUrl: '/videos/R/RABBIT.mp4' },
            { videoUrl: '/videos/R/RAIN.mp4' },
            { videoUrl: '/videos/R/ROSE.mp4' },
            { videoUrl: '/videos/R/ROBOT.mp4' },
          ],
          correctAnswer: '/videos/R/RAIN.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Rose"?',
          options: [
            { videoUrl: '/videos/R/RABBIT.mp4' },
            { videoUrl: '/videos/R/RAIN.mp4' },
            { videoUrl: '/videos/R/ROSE.mp4' },
            { videoUrl: '/videos/R/ROBOT.mp4' },
          ],
          correctAnswer: '/videos/R/ROSE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Robot"?',
          options: [
            { videoUrl: '/videos/R/RABBIT.mp4' },
            { videoUrl: '/videos/R/RAIN.mp4' },
            { videoUrl: '/videos/R/ROSE.mp4' },
            { videoUrl: '/videos/R/ROBOT.mp4' },
          ],
          correctAnswer: '/videos/R/ROBOT.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/R/RIVER.mp4',
          options: [
            { number: 'Rabbit' },
            { number: 'Rain' },
            { number: 'Rose' },
            { number: 'River' },
          ],
          correctAnswer: 'River',
        },
      ],
    },
    {
      id: 'word-s1',
      title: 'Words starting with S',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Sun"?',
          options: [
            { videoUrl: '/videos/S/SUN.mp4' },
            { videoUrl: '/videos/S/STAR.mp4' },
            { videoUrl: '/videos/S/SNAKE.mp4' },
            { videoUrl: '/videos/S/SPOON.mp4' },
          ],
          correctAnswer: '/videos/S/SUN.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Star"?',
          options: [
            { videoUrl: '/videos/S/SUN.mp4' },
            { videoUrl: '/videos/S/STAR.mp4' },
            { videoUrl: '/videos/S/SNAKE.mp4' },
            { videoUrl: '/videos/S/SPOON.mp4' },
          ],
          correctAnswer: '/videos/S/STAR.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Snake"?',
          options: [
            { videoUrl: '/videos/S/SUN.mp4' },
            { videoUrl: '/videos/S/STAR.mp4' },
            { videoUrl: '/videos/S/SNAKE.mp4' },
            { videoUrl: '/videos/S/SPOON.mp4' },
          ],
          correctAnswer: '/videos/S/SNAKE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Spoon"?',
          options: [
            { videoUrl: '/videos/S/SUN.mp4' },
            { videoUrl: '/videos/S/STAR.mp4' },
            { videoUrl: '/videos/S/SNAKE.mp4' },
            { videoUrl: '/videos/S/SPOON.mp4' },
          ],
          correctAnswer: '/videos/S/SPOON.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/S/SHIP.mp4',
          options: [
            { number: 'Sun' },
            { number: 'Star' },
            { number: 'Snake' },
            { number: 'Ship' },
          ],
          correctAnswer: 'Ship',
        },
      ],
    },
    {
      id: 'word-t1',
      title: 'Words starting with T',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Tree"?',
          options: [
            { videoUrl: '/videos/T/TREE.mp4' },
            { videoUrl: '/videos/T/TIGER.mp4' },
            { videoUrl: '/videos/T/TABLE.mp4' },
            { videoUrl: '/videos/T/TOY.mp4' },
          ],
          correctAnswer: '/videos/T/TREE.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Tiger"?',
          options: [
            { videoUrl: '/videos/T/TREE.mp4' },
            { videoUrl: '/videos/T/TIGER.mp4' },
            { videoUrl: '/videos/T/TABLE.mp4' },
            { videoUrl: '/videos/T/TOY.mp4' },
          ],
          correctAnswer: '/videos/T/TIGER.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Table"?',
          options: [
            { videoUrl: '/videos/T/TREE.mp4' },
            { videoUrl: '/videos/T/TIGER.mp4' },
            { videoUrl: '/videos/T/TABLE.mp4' },
            { videoUrl: '/videos/T/TOY.mp4' },
          ],
          correctAnswer: '/videos/T/TABLE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Toy"?',
          options: [
            { videoUrl: '/videos/T/TREE.mp4' },
            { videoUrl: '/videos/T/TIGER.mp4' },
            { videoUrl: '/videos/T/TABLE.mp4' },
            { videoUrl: '/videos/T/TOY.mp4' },
          ],
          correctAnswer: '/videos/T/TOY.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/T/TRAIN.mp4',
          options: [
            { number: 'Tree' },
            { number: 'Tiger' },
            { number: 'Table' },
            { number: 'Train' },
          ],
          correctAnswer: 'Train',
        },
      ],
    },
    {
      id: 'word-u1',
      title: 'Words starting with U',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Umbrella"?',
          options: [
            { videoUrl: '/videos/U/UMBRELLA.mp4' },
            { videoUrl: '/videos/U/UNICORN.mp4' },
            { videoUrl: '/videos/U/UNIVERSE.mp4' },
            { videoUrl: '/videos/U/UP.mp4' },
          ],
          correctAnswer: '/videos/U/UMBRELLA.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Unicorn"?',
          options: [
            { videoUrl: '/videos/U/UMBRELLA.mp4' },
            { videoUrl: '/videos/U/UNICORN.mp4' },
            { videoUrl: '/videos/U/UNIVERSE.mp4' },
            { videoUrl: '/videos/U/UP.mp4' },
          ],
          correctAnswer: '/videos/U/UNICORN.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Universe"?',
          options: [
            { videoUrl: '/videos/U/UMBRELLA.mp4' },
            { videoUrl: '/videos/U/UNICORN.mp4' },
            { videoUrl: '/videos/U/UNIVERSE.mp4' },
            { videoUrl: '/videos/U/UP.mp4' },
          ],
          correctAnswer: '/videos/U/UNIVERSE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Up"?',
          options: [
            { videoUrl: '/videos/U/UMBRELLA.mp4' },
            { videoUrl: '/videos/U/UNICORN.mp4' },
            { videoUrl: '/videos/U/UNIVERSE.mp4' },
            { videoUrl: '/videos/U/UP.mp4' },
          ],
          correctAnswer: '/videos/U/UP.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/U/UNDER.mp4',
          options: [
            { number: 'Umbrella' },
            { number: 'Unicorn' },
            { number: 'Universe' },
            { number: 'Under' },
          ],
          correctAnswer: 'Under',
        },
      ],
    },
    {
      id: 'word-v1',
      title: 'Words starting with V',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Van"?',
          options: [
            { videoUrl: '/videos/V/VAN.mp4' },
            { videoUrl: '/videos/V/VASE.mp4' },
            { videoUrl: '/videos/V/VIOLIN.mp4' },
            { videoUrl: '/videos/V/VULTURE.mp4' },
          ],
          correctAnswer: '/videos/V/VAN.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Vase"?',
          options: [
            { videoUrl: '/videos/V/VAN.mp4' },
            { videoUrl: '/videos/V/VASE.mp4' },
            { videoUrl: '/videos/V/VIOLIN.mp4' },
            { videoUrl: '/videos/V/VULTURE.mp4' },
          ],
          correctAnswer: '/videos/V/VASE.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Violin"?',
          options: [
            { videoUrl: '/videos/V/VAN.mp4' },
            { videoUrl: '/videos/V/VASE.mp4' },
            { videoUrl: '/videos/V/VIOLIN.mp4' },
            { videoUrl: '/videos/V/VULTURE.mp4' },
          ],
          correctAnswer: '/videos/V/VIOLIN.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Vulture"?',
          options: [
            { videoUrl: '/videos/V/VAN.mp4' },
            { videoUrl: '/videos/V/VASE.mp4' },
            { videoUrl: '/videos/V/VIOLIN.mp4' },
            { videoUrl: '/videos/V/VULTURE.mp4' },
          ],
          correctAnswer: '/videos/V/VULTURE.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/V/VICTORY.mp4',
          options: [
            { number: 'Van' },
            { number: 'Vase' },
            { number: 'Violin' },
            { number: 'Victory' },
          ],
          correctAnswer: 'Victory',
        },
      ],
    },
    {
      id: 'word-w1',
      title: 'Words starting with W',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Water"?',
          options: [
            { videoUrl: '/videos/W/WATER.mp4' },
            { videoUrl: '/videos/W/WINDOW.mp4' },
            { videoUrl: '/videos/W/WHALE.mp4' },
            { videoUrl: '/videos/W/WATCH.mp4' },
          ],
          correctAnswer: '/videos/W/WATER.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Window"?',
          options: [
            { videoUrl: '/videos/W/WATER.mp4' },
            { videoUrl: '/videos/W/WINDOW.mp4' },
            { videoUrl: '/videos/W/WHALE.mp4' },
            { videoUrl: '/videos/W/WATCH.mp4' },
          ],
          correctAnswer: '/videos/W/WINDOW.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Whale"?',
          options: [
            { videoUrl: '/videos/W/WATER.mp4' },
            { videoUrl: '/videos/W/WINDOW.mp4' },
            { videoUrl: '/videos/W/WHALE.mp4' },
            { videoUrl: '/videos/W/WATCH.mp4' },
          ],
          correctAnswer: '/videos/W/WHALE.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Watch"?',
          options: [
            { videoUrl: '/videos/W/WATER.mp4' },
            { videoUrl: '/videos/W/WINDOW.mp4' },
            { videoUrl: '/videos/W/WHALE.mp4' },
            { videoUrl: '/videos/W/WATCH.mp4' },
          ],
          correctAnswer: '/videos/W/WATCH.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/W/WOLF.mp4',
          options: [
            { number: 'Water' },
            { number: 'Window' },
            { number: 'Whale' },
            { number: 'Wolf' },
          ],
          correctAnswer: 'Wolf',
        },
      ],
    },

    {
      id: 'word-x1',
      title: 'Words starting with X',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "X-ray"?',
          options: [
            { videoUrl: '/videos/X/XRAY.mp4' },
            { videoUrl: '/videos/X/XMAS.mp4' },
            { videoUrl: '/videos/X/XENON.mp4' },
            { videoUrl: '/videos/X/XEROX.mp4' },
          ],
          correctAnswer: '/videos/X/XRAY.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Xmas"?',
          options: [
            { videoUrl: '/videos/X/XRAY.mp4' },
            { videoUrl: '/videos/X/XMAS.mp4' },
            { videoUrl: '/videos/X/XENON.mp4' },
            { videoUrl: '/videos/X/XEROX.mp4' },
          ],
          correctAnswer: '/videos/X/XMAS.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Xenon"?',
          options: [
            { videoUrl: '/videos/X/XRAY.mp4' },
            { videoUrl: '/videos/X/XMAS.mp4' },
            { videoUrl: '/videos/X/XENON.mp4' },
            { videoUrl: '/videos/X/XEROX.mp4' },
          ],
          correctAnswer: '/videos/X/XENON.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Xerox"?',
          options: [
            { videoUrl: '/videos/X/XRAY.mp4' },
            { videoUrl: '/videos/X/XMAS.mp4' },
            { videoUrl: '/videos/X/XENON.mp4' },
            { videoUrl: '/videos/X/XEROX.mp4' },
          ],
          correctAnswer: '/videos/X/XEROX.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/X/XENOPHOBIA.mp4',
          options: [
            { number: 'X-ray' },
            { number: 'Xmas' },
            { number: 'Xenon' },
            { number: 'Xenophobia' },
          ],
          correctAnswer: 'Xenophobia',
        },
      ],
    },
    {
      id: 'word-y1',
      title: 'Words starting with Y',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Yellow"?',
          options: [
            { videoUrl: '/videos/Y/YELLOW.mp4' },
            { videoUrl: '/videos/Y/YAK.mp4' },
            { videoUrl: '/videos/Y/YARN.mp4' },
            { videoUrl: '/videos/Y/YOGURT.mp4' },
          ],
          correctAnswer: '/videos/Y/YELLOW.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Yak"?',
          options: [
            { videoUrl: '/videos/Y/YELLOW.mp4' },
            { videoUrl: '/videos/Y/YAK.mp4' },
            { videoUrl: '/videos/Y/YARN.mp4' },
            { videoUrl: '/videos/Y/YOGURT.mp4' },
          ],
          correctAnswer: '/videos/Y/YAK.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Yarn"?',
          options: [
            { videoUrl: '/videos/Y/YELLOW.mp4' },
            { videoUrl: '/videos/Y/YAK.mp4' },
            { videoUrl: '/videos/Y/YARN.mp4' },
            { videoUrl: '/videos/Y/YOGURT.mp4' },
          ],
          correctAnswer: '/videos/Y/YARN.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Yogurt"?',
          options: [
            { videoUrl: '/videos/Y/YELLOW.mp4' },
            { videoUrl: '/videos/Y/YAK.mp4' },
            { videoUrl: '/videos/Y/YARN.mp4' },
            { videoUrl: '/videos/Y/YOGURT.mp4' },
          ],
          correctAnswer: '/videos/Y/YOGURT.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/Y/YACHT.mp4',
          options: [
            { number: 'Yellow' },
            { number: 'Yak' },
            { number: 'Yarn' },
            { number: 'Yacht' },
          ],
          correctAnswer: 'Yacht',
        },
      ],
    },
    {
      id: 'word-z1',
      title: 'Words starting with Z',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sign for "Zebra"?',
          options: [
            { videoUrl: '/videos/Z/ZEBRA.mp4' },
            { videoUrl: '/videos/Z/ZOO.mp4' },
            { videoUrl: '/videos/Z/ZIGZAG.mp4' },
            { videoUrl: '/videos/Z/ZUCCHINI.mp4' },
          ],
          correctAnswer: '/videos/Z/ZEBRA.mp4',
        },
        {
          id: 'q2',
          question: 'What is the correct sign for "Zoo"?',
          options: [
            { videoUrl: '/videos/Z/ZEBRA.mp4' },
            { videoUrl: '/videos/Z/ZOO.mp4' },
            { videoUrl: '/videos/Z/ZIGZAG.mp4' },
            { videoUrl: '/videos/Z/ZUCCHINI.mp4' },
          ],
          correctAnswer: '/videos/Z/ZOO.mp4',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "Zigzag"?',
          options: [
            { videoUrl: '/videos/Z/ZEBRA.mp4' },
            { videoUrl: '/videos/Z/ZOO.mp4' },
            { videoUrl: '/videos/Z/ZIGZAG.mp4' },
            { videoUrl: '/videos/Z/ZUCCHINI.mp4' },
          ],
          correctAnswer: '/videos/Z/ZIGZAG.mp4',
        },
        {
          id: 'q4',
          question: 'What is the correct sign for "Zucchini"?',
          options: [
            { videoUrl: '/videos/Z/ZEBRA.mp4' },
            { videoUrl: '/videos/Z/ZOO.mp4' },
            { videoUrl: '/videos/Z/ZIGZAG.mp4' },
            { videoUrl: '/videos/Z/ZUCCHINI.mp4' },
          ],
          correctAnswer: '/videos/Z/ZUCCHINI.mp4',
        },
        {
          id: 'q5',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/Z/ZEN.mp4',
          options: [
            { number: 'Zebra' },
            { number: 'Zoo' },
            { number: 'Zigzag' },
            { number: 'Zen' },
          ],
          correctAnswer: 'Zen',
        },
      ],
    }
  ],
  categories: [
    {
      id: 'academic',
      quizzes: [
        {
          id: 'academic1',
          title: 'Academic Knowledge',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "Absorption"?',
              options: [
                { videoUrl: '/videos/ACADEMIC/ABSORPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/ADAPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/CATHODE.mp4' },
                { videoUrl: '/videos/ACADEMIC/ADJECTIVE.mp4' },
              ],
              correctAnswer: '/videos/ACADEMIC/ABSORPTION.mp4'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/ACADEMIC/ADAPTION.mp4',
              options: [
                { number: 'Carbon Dioxide' },
                { number: 'Adaption' },
                { number: 'Cathode' },
                { number: 'Larynx' },
              ],
              correctAnswer: 'Adaption'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "Cathode"?',
              options: [
                { videoUrl: '/videos/ACADEMIC/ABSORPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/ADAPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/CATHODE.mp4' },
                { videoUrl: '/videos/ACADEMIC/ACCENT.mp4' },
              ],
              correctAnswer: '/videos/ACADEMIC/CATHODE.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/ACADEMIC/ADJECTIVE.mp4',
              options: [
                { number: 'Adjective' },
                { number: 'Accent' },
                { number: 'Cathode' },
                { number: 'Biography' },
              ],
              correctAnswer: 'Adjective'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Accent"?',
              options: [
                { videoUrl: '/videos/ACADEMIC/ADJECTIVE.mp4' },
                { videoUrl: '/videos/ACADEMIC/ADAPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/ACCENT.mp4' },
                { videoUrl: '/videos/ACADEMIC/CATHODE.mp4' },
              ],
              correctAnswer: '/videos/ACADEMIC/ACCENT.mp4'
            }
          ]
        }
      ]
    },
    
    {
      id: 'countries',
      quizzes: [
        {
          id: 'countries1',
          title: 'Countries of the World',
          questions: [
            {
              id: 'q1',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/COUNTRIES/MALASIYA.mp4',
              options: [
                { number: 'Vietnam' },
                { number: 'India' },
                { number: 'Malaysia' },
                { number: 'Sweden' }
              ],
              correctAnswer: 'Malaysia'
            },
            {
              id: 'q2',
              question: 'What is the correct sign for "Vietnam"?',
              options: [
                { videoUrl: '/videos/COUNTRIES/MALASIYA.mp4' },
                { videoUrl: '/videos/COUNTRIES/VIETNAM.mp4' },
                { videoUrl: '/videos/COUNTRIES/SOUTH KOREA.mp4' },
                { videoUrl: '/videos/COUNTRIES/SWEDEN.mp4' }
              ],
              correctAnswer: '/videos/COUNTRIES/VIETNAM.mp4'
            },
            {
              id: 'q3',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/COUNTRIES/INDIA.mp4',
              options: [
                { number: 'India' },
                { number: 'South Korea' },
                { number: 'Vietnam' },
                { number: 'Malaysia' }
              ],
              correctAnswer: 'India'
            },
            {
              id: 'q4',
              question: 'What is the correct sign for "South Korea"?',
              options: [
                { videoUrl: '/videos/COUNTRIES/INDIA.mp4' },
                { videoUrl: '/videos/COUNTRIES/SOUTH KOREA.mp4' },
                { videoUrl: '/videos/COUNTRIES/VIETNAM.mp4' },
                { videoUrl: '/videos/COUNTRIES/SWEDEN.mp4' }
              ],
              correctAnswer: '/videos/COUNTRIES/SOUTH KOREA.mp4'
            },
            {
              id: 'q5',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/COUNTRIES/SWEDEN.mp4',
              options: [
                { number: 'Sweden' },
                { number: 'Vietnam' },
                { number: 'India' },
                { number: 'South Korea' }
              ],
              correctAnswer: 'Sweden'
            }
          ]
        }
      ]
    },
    {
      id: 'finance',
      quizzes: [
        {
          id: 'finance1',
          title: 'Finance and Banking',
          questions: [
            {
              id: 'q1',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/FINANCE/BROKERS.mp4',
              options: [
                { number: 'Deposit' },
                { number: 'Bankruptcy' },
                { number: 'Brokers' },
                { number: 'Loan' }
              ],
              correctAnswer: 'Brokers'
            },
            {
              id: 'q2',
              question: 'What is the correct sign for "Deposit"?',
              options: [
                { videoUrl: '/videos/FINANCE/BROKERS.mp4' },
                { videoUrl: '/videos/FINANCE/DEPOSIT.mp4' },
                { videoUrl: '/videos/FINANCE/LOAN.mp4' },
                { videoUrl: '/videos/FINANCE/TAX.mp4' }
              ],
              correctAnswer: '/videos/FINANCE/DEPOSIT.mp4'
            },
            {
              id: 'q3',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/FINANCE/BANKRUPTCY.mp4',
              options: [
                { number: 'Bankruptcy' },
                { number: 'Loan' },
                { number: 'Tax' },
                { number: 'Deposit' }
              ],
              correctAnswer: 'Bankruptcy'
            },
            {
              id: 'q4',
              question: 'What is the correct sign for "Loan"?',
              options: [
                { videoUrl: '/videos/FINANCE/DEPOSIT.mp4' },
                { videoUrl: '/videos/FINANCE/LOAN.mp4' },
                { videoUrl: '/videos/FINANCE/BANKRUPTCY.mp4' },
                { videoUrl: '/videos/FINANCE/TAX.mp4' }
              ],
              correctAnswer: '/videos/FINANCE/LOAN.mp4'
            },
            {
              id: 'q5',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/FINANCE/TAX.mp4',
              options: [
                { number: 'Tax' },
                { number: 'Loan' },
                { number: 'Brokers' },
                { number: 'Deposit' }
              ],
              correctAnswer: 'Tax'
            }
          ]
        }
      ]
    },
    {
      id: 'idioms',
      quizzes: [
        {
          id: 'idioms1',
          title: 'Common Idioms',
          questions: [
            {
              id: 'q1',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/IDIOMS/BETTER LATE THAN NEVER.mp4',
              options: [
                { number: 'Better late than never' },
                { number: 'It\'s raining cats and dogs' },
                { number: 'Pull yourself together' },
                { number: 'On the fence' },
              ],
              correctAnswer: 'Better late than never'
            },
            {
              id: 'q2',
              question: 'What is the correct sign for "It\'s raining cats and dogs"?',
              options: [
                { videoUrl: '/videos/IDIOMS/BETTER LATE THAN NEVER.mp4' },
                { videoUrl: '/videos/IDIOMS/ITS RAINING CATS&DOGS.mp4' },
                { videoUrl: '/videos/IDIOMS/PULL YOURSELF TOGETHER.mp4' },
                { videoUrl: '/videos/IDIOMS/ON THE FENCE.mp4' },
              ],
              correctAnswer: '/videos/IDIOMS/ITS RAINING CATS&DOGS.mp4'
            },
            {
              id: 'q3',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/IDIOMS/PULL YOURSELF TOGETHER.mp4',
              options: [
                { number: 'Better late than never' },
                { number: 'Pull someone\'s leg' },
                { number: 'On the fence' },
                { number: 'Pull yourself together' },
              ],
              correctAnswer: 'Pull yourself together'
            },
            {
              id: 'q4',
              question: 'What is the correct sign for "Pull someone\'s leg"?',
              options: [
                { videoUrl: '/videos/IDIOMS/ON THE FENCE.mp4' },
                { videoUrl: '/videos/IDIOMS/ITS RAINING CATS&DOGS.mp4' },
                { videoUrl: '/videos/IDIOMS/PULL SOMEONES LEG.mp4' },
                { videoUrl: '/videos/IDIOMS/BETTER LATE THAN NEVER.mp4' },
              ],
              correctAnswer: '/videos/IDIOMS/PULL SOMEONES LEG.mp4'
            },
            {
              id: 'q5',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/IDIOMS/ON THE FENCE.mp4',
              options: [
                { number: 'On the fence' },
                { number: 'Pull yourself together' },
                { number: 'It\'s raining cats and dogs' },
                { number: 'Better late than never' },
              ],
              correctAnswer: 'On the fence'
            }
          ]
        }
      ]
    },
    {
      id: 'legal',
      quizzes: [
        {
          id: 'legal1',
          title: 'Legal Terms',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "Acceptance Letter"?',
              videoUrl: '/videos/LEGAL/ACCEPTANCE LETTER.mp4',
              options: [
                { number: 'Acceptance Letter' },
                { number: 'AADHAR Card' },
                { number: 'Death Certificate' },
                { number: 'Divorce' },
              ],
              correctAnswer: 'Acceptance Letter'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/LEGAL/AADHAR CARD.mp4',
              options: [
                { number: 'Acceptance Letter' },
                { number: 'AADHAR Card' },
                { number: 'Death Certificate' },
                { number: 'Handcuffs' },
              ],
              correctAnswer: 'AADHAR Card'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "Death Certificate"?',
              options: [
                { videoUrl: '/videos/LEGAL/ACCEPTANCE LETTER.mp4' },
                { videoUrl: '/videos/LEGAL/AADHAR CARD.mp4' },
                { videoUrl: '/videos/LEGAL/DEATH CERTIFICATE.mp4' },
                { videoUrl: '/videos/LEGAL/DIVORCE.mp4' },
              ],
              correctAnswer: '/videos/LEGAL/DEATH CERTIFICATE.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/LEGAL/DIVORCE.mp4',
              options: [
                { number: 'Divorce' },
                { number: 'Handcuffs' },
                { number: 'Death Certificate' },
                { number: 'AADHAR Card' },
              ],
              correctAnswer: 'Divorce'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Handcuffs"?',
              options: [
                { videoUrl: '/videos/LEGAL/HANDCUFFS.mp4' },
                { videoUrl: '/videos/LEGAL/ACCEPTANCE LETTER.mp4' },
                { videoUrl: '/videos/LEGAL/AADHAR CARD.mp4' },
                { videoUrl: '/videos/LEGAL/DEATH CERTIFICATE.mp4' },
              ],
              correctAnswer: '/videos/LEGAL/HANDCUFFS.mp4'
            }
          ]
        }
      ]
    },
    {
      id: 'medical',
      quizzes: [
        {
          id: 'medical1',
          title: 'Medical Knowledge',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "Adam\'s Apple"?',
             
              options: [
                { videoUrl: '/videos/MEDICAL/INSOMNIA.mp4' },
                { videoUrl: '/videos/MEDICAL/ASTHMA.mp4' },
                { videoUrl: '/videos/MEDICAL/BOWEL.mp4' },
                { videoUrl: '/videos/MEDICAL/ADAMS APPLE.mp4' },
              ],
              correctAnswer: '/videos/MEDICAL/ADAMS APPLE.mp4'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/MEDICAL/ASTHMA.mp4',
              options: [
                { number: 'Adam\'s Apple' },
                { number: 'Asthma' },
                { number: 'Bowel' },
                { number: 'Insomnia' },
              ],
              correctAnswer: 'Asthma'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "Bowel"?',
              options: [
                { videoUrl: '/videos/MEDICAL/INSOMNIA.mp4' },
                { videoUrl: '/videos/MEDICAL/ASTHMA.mp4' },
                { videoUrl: '/videos/MEDICAL/BOWEL.mp4' },
                { videoUrl: '/videos/MEDICAL/CLAUSTROPHOBIA.mp4' },
              ],
              correctAnswer: '/videos/MEDICAL/BOWEL.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/MEDICAL/CLAUSTROPHOBIA.mp4',
              options: [
                { number: 'Claustrophobia' },
                { number: 'Asthma' },
                { number: 'Bowel' },
                { number: 'Insomnia' },
              ],
              correctAnswer: 'Claustrophobia'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Insomnia"?',
              options: [
                { videoUrl: '/videos/MEDICAL/INSOMNIA.mp4' },
                { videoUrl: '/videos/MEDICAL/ASTHMA.mp4' },
                { videoUrl: '/videos/MEDICAL/BOWEL.mp4' },
                { videoUrl: '/videos/MEDICAL/CLAUSTROPHOBIA.mp4' },
              ],
              correctAnswer: '/videos/MEDICAL/INSOMNIA.mp4'
            }
          ]
        }
      ]
    },
    {
      id: 'regional',
      quizzes: [
        {
          id: 'regional1',
          title: 'Regional Knowledge',
          questions: [
            {
              id: 'q1',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/REGIONAL/OVER.mp4',
              options: [
                { number: 'Morning' },
                { number: 'Hen' },
                { number: 'Nurse' },
                { number: 'Over' },
              ],
              correctAnswer: 'Over'
            },
            {
              id: 'q2',
              question: 'What is the correct oftenly used sign for "Hen" in Kolkata?',
              options: [
                { videoUrl: '/videos/REGIONAL/MORNING.mp4' },
                { videoUrl: '/videos/REGIONAL/HEN.mp4' },
                { videoUrl: '/videos/REGIONAL/NURSE.mp4' },
                { videoUrl: '/videos/REGIONAL/OVER.mp4' },
              ],
              correctAnswer: '/videos/REGIONAL/HEN.mp4'
            },
            {
              id: 'q3',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/REGIONAL/NURSE.mp4',
              options: [
                { number: 'Morning' },
                { number: 'Hen' },
                { number: 'Nurse' },
                { number: 'Foolish' },
              ],
              correctAnswer: 'Nurse'
            },
            {
              id: 'q4',
              question: 'What is the correct generally used sign for "Morning"in Hyderabad?',
              options: [
                { videoUrl: '/videos/REGIONAL/OVER.mp4' },
                { videoUrl: '/videos/REGIONAL/MORNING.mp4' },
                { videoUrl: '/videos/REGIONAL/HEN.mp4' },
                { videoUrl: '/videos/REGIONAL/FOOLISH.mp4' },
              ],
              correctAnswer: '/videos/REGIONAL/MORNING.mp4'
            },
            {
              id: 'q5',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/REGIONAL/FOOLISH.mp4',
              options: [
                { number: 'Foolish' },
                { number: 'Nurse' },
                { number: 'Hen' },
                { number: 'Over' },
              ],
              correctAnswer: 'Foolish'
            }
          ]
        }
      ]
    },
    {
      id: 'states',
      quizzes: [
        {
          id: 'states1',
          title: 'States and Cities',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "Chandigarh"?',
              options: [
                { videoUrl: '/videos/STATES/KERALA.mp4' },
                { videoUrl: '/videos/STATES/GUJARAT.mp4' },
                { videoUrl: '/videos/STATES/CHANDIGARH.mp4' },
                { videoUrl: '/videos/STATES/MEGHALAYA.mp4' },
              ],
              correctAnswer: '/videos/STATES/CHANDIGARH.mp4'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/STATES/GUJARAT.mp4',
              options: [
                { number: 'Chandigarh' },
                { number: 'Gujarat' },
                { number: 'Kerala' },
                { number: 'Shimla' },
              ],
              correctAnswer: '/videos/STATES/GUJARAT.mp4'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "Kerala"?',
              options: [
                { videoUrl: '/videos/STATES/SHIMLA.mp4' },
                { videoUrl: '/videos/STATES/MEGHALAYA.mp4' },
                { videoUrl: '/videos/STATES/CHANDIGARH.mp4' },
                { videoUrl: '/videos/STATES/KERALA.mp4' },
              ],
              correctAnswer: '/videos/STATES/KERALA.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/STATES/MEGHALAYA.mp4',
              options: [
                { number: 'Chandigarh' },
                { number: 'Gujarat' },
                { number: 'Kerala' },
                { number: 'Meghalaya' },
              ],
              correctAnswer: '/videos/STATES/MEGHALAYA.mp4'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Shimla"?',
              options: [
                { videoUrl: '/videos/STATES/CHANDIGARH.mp4' },
                { videoUrl: '/videos/STATES/SHIMLA.mp4' },
                { videoUrl: '/videos/STATES/GUJARAT.mp4' },
                { videoUrl: '/videos/STATES/MEGHALAYA.mp4' },
              ],
              correctAnswer: '/videos/STATES/SHIMLA.mp4'
            }
          ]
        }
      ]
    },
    {
      id: 'technical',
      quizzes: [
        {
          id: 'technical1',
          title: 'Technical Terms',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "App"?',
              options: [
                { videoUrl: '/videos/TECHNICAL/GOOGLE DRIVE.mp4', number: 'A' },
                { videoUrl: '/videos/TECHNICAL/DECRYPTION.mp4', number: 'B' },
                { videoUrl: '/videos/TECHNICAL/APP.mp4', number: 'C' },
                { videoUrl: '/videos/TECHNICAL/BINARY.mp4', number: 'D' },
              ],
              correctAnswer: '/videos/TECHNICAL/APP.mp4'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/TECHNICAL/BINARY.mp4',
              options: [
                { number: 'Binary' },
                { number: 'App' },
                { number: 'Memory Card' },
                { number: 'Decryption' }
              ],
              correctAnswer: 'Binary'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "Decryption"?',
              options: [
                { videoUrl: '/videos/TECHNICAL/APP.mp4' },
                { videoUrl: '/videos/TECHNICAL/DECRYPTION.mp4' },
                { videoUrl: '/videos/TECHNICAL/MEMORY CARD.mp4' },
                { videoUrl: '/videos/TECHNICAL/BINARY.mp4' },
              ],
              correctAnswer: '/videos/TECHNICAL/DECRYPTION.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/TECHNICAL/GOOGLE DRIVE.mp4',
              options: [
                { number: 'Memory Card' },
                { number: 'App' },
                { number: 'Binary' },
                { number: 'Google Drive' }
              ],
              correctAnswer: 'Google Drive'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Memory Card"?',
              options: [
                { videoUrl: '/videos/TECHNICAL/GOOGLE DRIVE.mp4' },
                { videoUrl: '/videos/TECHNICAL/MEMORY CARD.mp4' },
                { videoUrl: '/videos/TECHNICAL/BINARY.mp4' },
                { videoUrl: '/videos/TECHNICAL/APP.mp4' },
              ],
              correctAnswer: '/videos/TECHNICAL/MEMORY CARD.mp4'
            }
          ]
        }
      ]
    },
    {
      id: 'everyday',
      quizzes: [
        {
          id: 'everyday1',
          title: 'Everyday Knowledge',
          questions: [
            {
              id: 'q1',
              question: 'What is the correct sign for "able"?',
              options: [
                { videoUrl: '/videos/EVERYDAY/ABLE.mp4', number:'A' },
                { videoUrl: '/videos/EVERYDAY/ABOVE.mp4', number:'B' },
                { videoUrl: '/videos/EVERYDAY/YELLOW.mp4', number:'C' },
                { videoUrl: '/videos/EVERYDAY/ZEBRA CROSSING.mp4', number:'D' },
              ],
              correctAnswer: '/videos/EVERYDAY/ABLE.mp4'
            },
            {
              id: 'q2',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/EVERYDAY/YOURSELF.mp4',
              options: [
                { number: 'Able' },
                { number: 'Yourself' },
                { number: 'Accent' },
                { number: 'Adjective' }
              ],
              correctAnswer: 'Yourself'
            },
            {
              id: 'q3',
              question: 'What is the correct sign for "yellow"?',
              options: [
                { videoUrl: '/videos/EVERYDAY/YOURSELF.mp4' },
                { videoUrl: '/videos/EVERYDAY/ABOVE.mp4' },
                { videoUrl: '/videos/EVERYDAY/YELLOW.mp4'},
                { videoUrl: '/videos/EVERYDAY/ZEBRA CROSSING.mp4'},
              ],
              correctAnswer: '/videos/EVERYDAY/YELLOW.mp4'
            },
            {
              id: 'q4',
              question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/EVERYDAY/ZEBRA CROSSING.mp4',
              options: [
                { number: 'Yourself' },
                { number: 'Yellow' },
                { number: 'Zebra Crossing' },
                { number: 'Able' }
              ],
              correctAnswer: 'Zebra Crossing'
            },
            {
              id: 'q5',
              question: 'What is the correct sign for "Above"?',
              options: [
                { videoUrl: '/videos/EVERYDAY/ABOVE.mp4' },
                { videoUrl: '/videos/EVERYDAY/YOURSELF.mp4'},
                { videoUrl: '/videos/EVERYDAY/YELLOW.mp4' },
                { videoUrl: '/videos/EVERYDAY/ABLE.mp4' }
              ],
              correctAnswer: '/videos/EVERYDAY/ABOVE.mp4'
            }
          ]
        }
      ]
    }
  ]

};

export const levelBasedQuestions = {
  easy: [
    {
      id: 'easy1',
      title: 'Basic Knowledge Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is 2 + 2?',
          options: [
            { imageUrl: '../images/9.jpg' },
            { imageUrl: '../images/4.jpg' },
            { imageUrl: '../images/6.jpg' },
            { imageUrl: '../images/7.jpg' },
          ],
          correctAnswer: '../images/4.jpg',
        },
        {
          id: 'q3',
          question: 'What comes before the letter Q?',
          options: [
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/A.jpg' },
            { imageUrl: '../images/P.jpg' },
            { imageUrl: '../images/S.jpg' },
          ],
          correctAnswer: '../images/P.jpg',
        },
        {
          id: 'q4',
          question: 'The image shown below comes after which of the following options?',
          imageUrl: '../images/6.jpg',
          options: [
            { imageUrl: '../images/9.jpg' },
            { imageUrl: '../images/5.jpg' },
            { imageUrl: '../images/2.jpg' },
            { imageUrl: '../images/3.jpg' },
          ],
          correctAnswer: '6',
        },
        {
          id: 'q5',
          question: 'What comes before the letter Q?',
          options: [
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/A.jpg' },
            { imageUrl: '../images/P.jpg' },
            { imageUrl: '../images/S.jpg' },
          ],
          correctAnswer: '../images/P.jpg',
        },
        {
          id: 'q6',
          question: 'What comes before the letter Q?',
          options: [
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/A.jpg' },
            { imageUrl: '../images/P.jpg' },
            { imageUrl: '../images/S.jpg' },
          ],
          correctAnswer: '../images/P.jpg',
        },
        {
          id: 'q7',
          question: 'What comes before the letter Q?',
          options: [
            { imageUrl: '../images/X.jpg' },
            { imageUrl: '../images/A.jpg' },
            { imageUrl: '../images/P.jpg' },
            { imageUrl: '../images/S.jpg' },
          ],
          correctAnswer: '../images/P.jpg',
        },
      ],
    },
  ],
  medium: [
    {
      id: 'medium1',
      title: 'Intermediate Quiz',
      questions: [
        {
          id: 'q1',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/TECHNICAL/BINARY.mp4',
          options: [
            { number: 'Binary' },
            { number: 'App' },
            { number: 'Memory Card' },
            { number: 'Decryption' }
          ],
          correctAnswer: 'Binary'
        },
        {
          id: 'q2',
          question: 'What image represents 4 + 3?',
          options: [
            { imageUrl: '/images/1.jpg' },
            { imageUrl: '/images/5.jpg' },
            { imageUrl: '/images/7.jpg' },
            { imageUrl: '/images/3.jpg' },
          ],
          correctAnswer: '/images/7.jpg',
        },
        {
          id: 'q3',
          question: 'What is the correct sign for "yellow"?',
          options: [
            { videoUrl: '/videos/EVERYDAY/YOURSELF.mp4' },
            { videoUrl: '/videos/EVERYDAY/ABOVE.mp4' },
            { videoUrl: '/videos/EVERYDAY/YELLOW.mp4'},
            { videoUrl: '/videos/EVERYDAY/ZEBRA CROSSING.mp4'},
          ],
          correctAnswer: '/videos/EVERYDAY/YELLOW.mp4'
        },
        {
          id: 'q4',
          question: 'Choose the correct answer for the sign shown below:',
          videoUrl: '/videos/FINANCE/BROKERS.mp4',
          options: [
            { number: 'Deposit' },
            { number: 'Bankruptcy' },
            { number: 'Brokers' },
            { number: 'Loan' }
          ],
          correctAnswer: 'Brokers'
        },
        {
          id:'q5',
          question: 'What is the correct sign for "Accent"?',
              options: [
                { videoUrl: '/videos/ACADEMIC/ADJECTIVE.mp4' },
                { videoUrl: '/videos/ACADEMIC/ADAPTION.mp4' },
                { videoUrl: '/videos/ACADEMIC/ACCENT.mp4' },
                { videoUrl: '/videos/ACADEMIC/CATHODE.mp4' },
              ],
              correctAnswer: '/videos/ACADEMIC/ACCENT.mp4'
        },
        {
          id:'q6',
          question: 'What is the correct sign for "Loan"?',
              options: [
                { videoUrl: '/videos/FINANCE/DEPOSIT.mp4' },
                { videoUrl: '/videos/FINANCE/LOAN.mp4' },
                { videoUrl: '/videos/FINANCE/BANKRUPTCY.mp4' },
                { videoUrl: '/videos/FINANCE/TAX.mp4' }
              ],
              correctAnswer: '/videos/FINANCE/LOAN.mp4'
        },
        {
          id:'q7',
          question: 'Choose the correct answer for the sign shown below:',
              videoUrl: '/videos/COUNTRIES/INDIA.mp4',
              options: [
                { number: 'India' },
                { number: 'South Korea' },
                { number: 'Vietnam' },
                { number: 'Malaysia' }
              ],
              correctAnswer: 'India'
        },
        {
          id:'q8',
          question: 'What is the correct sign for "Handcuffs"?',
              options: [
                { videoUrl: '/videos/LEGAL/HANDCUFFS.mp4' },
                { videoUrl: '/videos/LEGAL/ACCEPTANCE LETTER.mp4' },
                { videoUrl: '/videos/LEGAL/AADHAR CARD.mp4' },
                { videoUrl: '/videos/LEGAL/DEATH CERTIFICATE.mp4' },
              ],
              correctAnswer: '/videos/LEGAL/HANDCUFFS.mp4'
        },
      ],
    },
  ],
  hard: [
    {
      id: 'hard1',
      title: 'Advanced Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the square root of 144?',
          options: [
            { number: '10' },
            { number: '11' },
            { number: '12' },
            { number: '13' },
          ],
          correctAnswer: '12',
        },
        {
          id: 'q2',
          question: 'Who wrote "Hamlet"?',
          options: [
            { number: 'Shakespeare' },
            { number: 'Dickens' },
            { number: 'Hemingway' },
            { number: 'Austen' },
          ],
          correctAnswer: 'Shakespeare',
        },
      ],
    },
  ],
  attempts:[],
};