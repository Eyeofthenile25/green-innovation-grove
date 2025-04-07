
import React from 'react';
import { CircleCheck, CircleX, HelpCircle, Trophy } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  title: string;
  description: string;
  image?: string;
  pointsValue: number;
  questions: Question[];
  onComplete?: (score: number) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  image,
  pointsValue,
  questions,
  onComplete
}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  
  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      if (onComplete) {
        onComplete(score);
      }
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };
  
  const currentProgress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="animate-fade-in-up glass rounded-2xl border border-white/40 overflow-hidden transition-all hover:shadow-md">
      {/* Header with image */}
      {image && (
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[3/1] object-cover"
          />
          <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <div className="flex items-center text-white">
              <HelpCircle className="w-5 h-5 mr-1" />
              <span className="font-medium">Quiz</span>
              <div className="ml-auto flex items-center">
                <Trophy className="w-4 h-4 mr-1 text-amber-400" />
                <span>{pointsValue} points</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="p-6">
        {!image && (
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 mr-1 text-anka-blue" />
              <span className="font-medium">Quiz</span>
            </div>
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-1 text-amber-400" />
              <span className="text-sm font-medium">{pointsValue} points</span>
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-anka-darkBlue/70 text-sm mb-4">{description}</p>
        
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-anka-gray/20 rounded-full mb-6">
          <div 
            className="h-full bg-anka-blue rounded-full transition-all duration-300"
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>
        
        {!isCompleted ? (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-4">
                {currentQuestion + 1}. {questions[currentQuestion].text}
              </h4>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                      selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-50 border-green-200 text-green-800'
                          : 'bg-red-50 border-red-200 text-red-800'
                        : 'border-anka-gray/20 hover:border-anka-blue/50'
                    }`}
                  >
                    <div className="flex items-center">
                      {isAnswered && selectedAnswer === index && (
                        index === questions[currentQuestion].correctAnswer
                          ? <CircleCheck className="w-5 h-5 mr-2 text-green-500" />
                          : <CircleX className="w-5 h-5 mr-2 text-red-500" />
                      )}
                      {option}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className={`w-full py-2.5 px-4 rounded-xl font-medium transition-colors ${
                isAnswered
                  ? 'bg-anka-blue hover:bg-anka-blue/90 text-white'
                  : 'bg-anka-gray/30 text-anka-gray cursor-not-allowed'
              }`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto bg-anka-blue/10 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-10 h-10 text-anka-blue" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
            <p className="text-anka-darkBlue/70 mb-6">
              You scored <span className="font-semibold">{score}</span> out of <span className="font-semibold">{questions.length}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 rounded-xl border border-anka-blue/30 text-anka-blue font-medium hover:bg-anka-blue/5 transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={() => onComplete && onComplete(score)}
                className="px-6 py-2.5 rounded-xl bg-anka-blue hover:bg-anka-blue/90 text-white font-medium transition-colors"
              >
                Claim {pointsValue} Points
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
