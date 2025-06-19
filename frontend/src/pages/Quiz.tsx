import { useState } from 'react';
import { QuizModuleSelector } from '../components/QuizModuleSelector';
import { LearningModule } from '../components/LearningModule.tsx';
import { LevelModule } from '../components/LevelModule.tsx';
import { QuizContent } from '../components/QuizContent.tsx';
import { learningModuleQuestions, levelBasedQuestions } from '../types/quiz.ts';
import type { LearningModule as LearningModuleType, LevelModule as LevelModuleType, Quiz, QuizAttempt } from '../types/quiz.ts';
import { ChevronLeft } from 'lucide-react';

function Quiz() {
  const [selectedModule, setSelectedModule] = useState<'learning' | 'level' | null>(null);
  const [learningData, setLearningData] = useState<LearningModuleType>(() => {
    const savedData = localStorage.getItem('learningData');
    return savedData
      ? JSON.parse(savedData)
      : {
          ...learningModuleQuestions,
          progress: { completed: 0, total: 37 },
          attempts: [],
        };
  }); 
  const [levelData, setLevelData] = useState<LevelModuleType>(levelBasedQuestions);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  const handleQuizComplete = (quizId: string, completed: boolean, score: number) => {
    setLearningData((prev: LearningModuleType) => {
      const newData = { ...prev };

      const updateQuizzes = (quizzes: Quiz[] = []) =>
        quizzes.map((q) => (q.id === quizId ? { ...q, completed } : q));

      newData.numbers = updateQuizzes(prev.numbers);
      newData.alphabets = updateQuizzes(prev.alphabets);
      newData.words = updateQuizzes(prev.words);

      newData.categories = prev.categories.map((cat) => ({
        ...cat,
        quizzes: updateQuizzes(cat.quizzes || []),
      }));

      const totalQuizzes = [
        ...newData.numbers,
        ...newData.alphabets,
        ...newData.words,
        ...newData.categories.flatMap((cat) => cat.quizzes || []),
      ].length;

      const completedQuizzes = [
        ...newData.numbers,
        ...newData.alphabets,
        ...newData.words,
        ...newData.categories.flatMap((cat) => cat.quizzes || []),
      ].filter((q) => q.completed).length;

      newData.progress = {
        completed: completedQuizzes,
        total: totalQuizzes,
      };

      localStorage.setItem('learningData', JSON.stringify(newData));

      return newData;
    });

    setQuizzes((prev: Quiz[]) => 
      prev.map((q: Quiz) => 
      q.id === quizId ? { ...q, score, completed: true } : q
      )
    );
  };

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
  };

  const handleQuizFinish = (score: number) => {
    if (!activeQuiz) return;

    const attempt = {
      quizId: activeQuiz.id,
      score,
      timestamp: new Date(),
    };

    if (selectedModule === 'learning') {
      setLearningData((prev: LearningModuleType) => ({
        ...prev,
        attempts: [...prev.attempts, attempt],
      }));
      handleQuizComplete(activeQuiz.id, true, score);
    } else {
      setLevelData((prev: LevelModuleType) => ({
        ...prev,
        attempts: [...prev.attempts, attempt],
        easy: prev.easy.map((q: Quiz) => (q.id === activeQuiz.id ? { ...q, score } : q)),
        medium: prev.medium.map((q: Quiz) => (q.id === activeQuiz.id ? { ...q, score } : q)),
        hard: prev.hard.map((q: Quiz) => (q.id === activeQuiz.id ? { ...q, score } : q)),
      }));
      handleQuizComplete(activeQuiz.id, true, score);
    }

    setActiveQuiz(null);
  };

  const handleBack = () => {
    if (activeQuiz) {
      setActiveQuiz(null);
    } else if (selectedModule) {
      setSelectedModule(null);
    }
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="relative mb-4">
        {(activeQuiz || selectedModule) && (
          <button
            onClick={handleBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-accent hover:text-accent-purple transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
            <span className="text-2xl font-medium">Back</span>
          </button>
        )}
        <h1 className="text-4xl font-bold">
          Fluent in Sign? <span className="text-accent neon-text">Let's Find Out</span>
        </h1>
      </div>
  
      {!activeQuiz && !selectedModule && (
        <>
          <QuizModuleSelector
            selectedModule={selectedModule}
            onModuleSelect={setSelectedModule}
          />
          <div className="mt-12 flex items-center justify-center">
            <video
              src="/videos/172528-847499874_small.mp4"
              loop
              autoPlay
              muted
              className="rounded-lg shadow-lg"
              style={{
                width: '600px',
                height: '300px',
              }}
            />
          </div>
        </>
      )}
  
      {/* Rest of your code remains the same */}
      {selectedModule === 'learning' && !activeQuiz && (
        <div className="mt-12">
          <LearningModule
            data={learningData}
            onQuizComplete={(quizId, completed) => handleQuizComplete(quizId, completed, 0)}
            onStartQuiz={handleStartQuiz}
          />
        </div>
      )}
  
      {selectedModule === 'level' && !activeQuiz && (
        <div className="mt-12">
          <LevelModule
            data={levelData}
            onStartQuiz={handleStartQuiz}
          />
        </div>
      )}
  
      {activeQuiz && (
        <div className="mt-12">
          <QuizContent
            quiz={activeQuiz}
            onComplete={handleQuizFinish}
          />
        </div>
      )}
    </div>
  </div>
  );
}

// Removed duplicate implementation of setQuizzes

export default Quiz;

function setQuizzes(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.');
}
function setLearningData(arg0: (prev: LearningModuleType) => { numbers: Quiz[]; alphabets: Quiz[]; words: Quiz[]; categories: { quizzes: Quiz[]; id: string; }[]; progress: { completed: number; total: number; }; attempts: QuizAttempt[]; }) {
  throw new Error('Function not implemented.');
}

// Removed duplicate implementation of setQuizzes
