import React from 'react';
import { levelBasedQuestions } from '../types/quiz.ts'; 
import { QuizAccordion } from './QuizAccordion';
import type { LevelModule as LevelModuleType, Quiz } from '../types/quiz.ts';

interface LevelModuleProps {
  data: LevelModuleType;
  onStartQuiz: (quiz: Quiz) => void;
}

export function LevelModule({ onStartQuiz }: LevelModuleProps) {
  return (
    <div className="quiz-container">
      <QuizAccordion title="Easy Level">
        {levelBasedQuestions.easy.map((quiz: Quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2">
            <span>{quiz.title}</span>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              Start Quiz
            </button>
          </div>
        ))}
      </QuizAccordion>

      <QuizAccordion title="Medium Level">
        {levelBasedQuestions.medium.map((quiz: Quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2">
            <span>{quiz.title}</span>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              Start Quiz
            </button>
          </div>
        ))}
      </QuizAccordion>

      <QuizAccordion title="Hard Level">
        {levelBasedQuestions.hard.map((quiz: Quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2">
            <span>{quiz.title}</span>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              Start Quiz
            </button>
          </div>
        ))}
      </QuizAccordion>
    </div>
  );
}