
import React from 'react';
import { CircleCheck, CircleX, HelpCircle, Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

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
  icon?: React.ReactNode;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  image,
  pointsValue,
  questions,
  onComplete,
  icon
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="foggy-purple rounded-2xl overflow-hidden transition-all hover:shadow-md"
    >
      {/* Header with image */}
      {image && (
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anka-black/80 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-center text-white">
              {icon || <HelpCircle className="w-5 h-5 mr-2 text-anka-amethyst" />}
              <span className="font-medium">{title}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="p-5">
        {!image && (
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {icon || <HelpCircle className="w-5 h-5 mr-1 text-anka-amethyst" />}
              <span className="font-medium">{title}</span>
            </div>
          </div>
        )}
        
        {!image && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <p className="text-anka-sand/80 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-anka-gold">
            <Trophy className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{pointsValue} points</span>
          </div>
          <div className="text-xs text-anka-sand/70">
            {questions.length} questions
          </div>
        </div>
        
        {/* Progress bar */}
        {!isCompleted && (
          <div className="w-full h-1.5 bg-anka-gray/20 rounded-full mb-5">
            <div 
              className="h-full bg-anka-amethyst rounded-full transition-all duration-300"
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>
        )}
        
        {!isCompleted ? (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-4 text-white">
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
                          ? 'bg-green-500/20 border-green-500/50 text-green-300'
                          : 'bg-red-500/20 border-red-500/50 text-red-300'
                        : 'border-white/20 hover:border-anka-amethyst/50 text-white/90'
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
                  ? 'bg-anka-amethyst hover:bg-anka-amethyst/90 text-white'
                  : 'bg-anka-gray/30 text-anka-gray cursor-not-allowed'
              }`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto bg-anka-amethyst/20 rounded-full flex items-center justify-center mb-4">
              <Award className="w-10 h-10 text-anka-amethyst" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">Quiz Completed!</h3>
            <p className="text-anka-sand/80 mb-6">
              You scored <span className="font-semibold text-anka-gold">{score}</span> out of <span className="font-semibold text-anka-gold">{questions.length}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 rounded-xl border border-anka-amethyst/40 text-anka-amethyst font-medium hover:bg-anka-amethyst/10 transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={() => onComplete && onComplete(score)}
                className="px-6 py-2.5 rounded-xl bg-anka-amethyst hover:bg-anka-amethyst/90 text-white font-medium transition-colors"
              >
                Claim {pointsValue} Points
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizCard;
