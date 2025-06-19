import React from 'react';
import { CheckSquare, Square, Play } from 'lucide-react';
import { QuizAccordion } from './QuizAccordion';
import { ProgressTracker } from './ProgressTracker';
import type { LearningModule as LearningModuleType, Quiz } from '../types/quiz';

interface LearningModuleProps {
  data: LearningModuleType;
  onQuizComplete: (quizId: string, completed: boolean) => void;
  onStartQuiz: (quiz: Quiz) => void;
}

export function LearningModule({ data, onQuizComplete, onStartQuiz }: LearningModuleProps) {
  return (
    <div className="quiz-container">
      <ProgressTracker completed={data.progress.completed} total={data.progress.total} />
      
      <QuizAccordion title="Think in Numbers">
        {data.numbers.map((quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuizComplete(quiz.id, !quiz.completed)}
                className="text-accent hover:text-accent-purple transition-colors"
              >
                {quiz.completed ? (
                  <CheckSquare className="w-5 h-5" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>
              <span>{quiz.title}</span>
            </div>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              <Play className="w-4 h-4" />
              Start Quiz
            </button>
          </div>
        ))}
      </QuizAccordion>

      <QuizAccordion title="The A to Z Quiz">
        {data.alphabets.map((quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuizComplete(quiz.id, !quiz.completed)}
                className="text-accent hover:text-accent-purple transition-colors"
              >
                {quiz.completed ? (
                  <CheckSquare className="w-5 h-5" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>
              <span>{quiz.title}</span>
            </div>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              <Play className="w-4 h-4" />
              Start Quiz
              {quiz.score !== undefined && (
    <span className="ml-2 font-bold text-accent">
      Score: {quiz.score}%
    </span>
  )}
            </button>
          </div>
        ))}
      </QuizAccordion>

      <QuizAccordion title="Letter Wordies">
        {data.words.map((quiz: Quiz) => (
          <div key={quiz.id} className="card flex items-center justify-between py-2 mb-4">
            <div className="flex items-center gap-2">
              <button
          onClick={() => onQuizComplete(quiz.id, !quiz.completed)}
          className="text-accent hover:text-accent-purple transition-colors"
              >
          {quiz.completed ? (
            <CheckSquare className="w-5 h-5" />
          ) : (
            <Square className="w-5 h-5" />
          )}
              </button>
              <span>{quiz.title}</span>
            </div>
            <button
              onClick={() => onStartQuiz(quiz)}
              className="btn-holographic flex items-center gap-2 py-2 px-4"
            >
              <Play className="w-4 h-4" />
              Start Quiz
              {quiz.score !== undefined && (
    <span className="ml-2 font-bold text-accent">
      Score: {quiz.score}%
    </span>
  )}
            </button>
          </div>
        ))}
      </QuizAccordion>

      <QuizAccordion title="Category Clash">
        {data.categories.map((category) => (
          <div key={category.id} className="card mb-4">
            
            {category.quizzes.map((quiz) => (
              <div key={quiz.id} className="flex items-center justify-between py-0 pl-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onQuizComplete(quiz.id, !quiz.completed)}
                    className="text-accent hover:text-accent-purple transition-colors"
                  >
                    {quiz.completed ? (
                      <CheckSquare className="w-5 h-5" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </button>
                  <span>{quiz.title}</span>
                </div>
                <button
                  onClick={() => onStartQuiz(quiz)}
                  className="btn-holographic flex items-center gap-2 py-2 px-4"
                >
                  <Play className="w-4 h-4" />
                  Start Quiz
                  {quiz.score !== undefined && (
    <span className="ml-2 font-bold text-accent">
      Score: {quiz.score}%
    </span>
  )}
                </button>
              </div>
            ))}
          </div>
        ))}
      </QuizAccordion>
    </div>
  );
}