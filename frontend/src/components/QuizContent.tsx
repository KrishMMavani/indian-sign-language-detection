import React, { useState } from 'react';
import type { Quiz, QuizQuestion } from '../types/quiz';

interface QuizContentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

export function QuizContent({ quiz, onComplete }: QuizContentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const question: QuizQuestion = quiz.questions[currentQuestion];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === question.correctAnswer; // Ensure correctAnswer is used
    const newAnswers = [...answers, answer];

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1); // Increment score if the answer is correct
    }

    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / quiz.questions.length) * 100); // Include the last question's score
      setShowResults(true);
      onComplete(finalScore);
    }
  };

  if (showResults) {
    const finalScore = Math.round((score / quiz.questions.length) * 100);

    return (
      <div className="holographic-panel p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <div
          className="text-6xl font-bold mb-4"
          style={{ color: finalScore >= 80 ? 'limegreen' : finalScore >= 50 ? 'gold' : 'red' }}
        >
          {finalScore}%
        </div>
        <p className="text-lg mb-4">
          You got {score} out of {quiz.questions.length} questions correct.
        </p>
        <p className="text-md text-gray-500">
          {finalScore >= 80
            ? 'Excellent job! 🎉'
            : finalScore >= 50
            ? 'Good effort! Keep improving! 💪'
            : 'Keep practicing! You can do better! 🚀'}
        </p>
      </div>
    );
  }

  return (
<div className="quiz-container">
  <div className="holographic-panel p-3 rounded-md shadow-md">
    <div className="mb-4">
      <div className="flex justify-start items-center mb-2">
        
        <span className="text-sm text-accent">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </span>
        <h3 className="text-lg font-semibold ml-auto">{quiz.title}</h3>
      </div>
      <div className="progress-bar h-2">
        <div
          className="progress-bar-fill transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        />
      </div>
    </div>

    <div className="mb-4">
      <h4 className="text-base mb-3">{question.question}</h4>
      
      {/* Check if the question has a video */}
      {question.videoUrl && (
        <div className="grid grid-cols-2 gap-4 justify-center items-center mb-3">
          <video
            src={question.videoUrl}
            
            autoPlay
            loop
            muted
            className="w-40 h-40 object-cover rounded-md shadow-md"
          />
        </div>
      )}

      {/* Check if the question has an image */}
      {question.imageUrl && !question.videoUrl && (
        <img
          src={question.imageUrl}
          alt="Question Image"
          className="w-32 h-auto rounded-lg shadow-md mb-3"
        />
      )}

      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option: any, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.videoUrl || option.number || option.imageUrl)}
            className="btn-holographic p-2 flex justify-center items-center"
          >
            {/* Check if the option is a video */}
            {option.videoUrl ? (
              <video
                src={option.videoUrl}
                autoPlay
                loop
                muted
                className="w-40 h-40 object-cover rounded-md shadow-md"
              />
            ) : option.imageUrl ? (
              <img
                src={option.imageUrl}
                alt="Option Image"
                className="w-40 h-40 object-cover rounded-md shadow-md"
              />
            ) : (
              <span className="text-lg font-bold">{option.number}</span>
            )}
          </button>
        ))}
      </div>
    </div>
 

        {/* Display Score After Each Answer */}
  <div className="score-section mt-2 p-1 bg-gray-800 rounded-md shadow-md text-center">
  <h4 className="text-xs font-semibold text-gray-300">Current Score</h4>
  <div className="text-lg font-bold text-accent">{score} / {quiz.questions.length}</div>
</div>


      </div>
    </div>
  );
}
