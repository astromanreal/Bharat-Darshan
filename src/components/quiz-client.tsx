"use client";

import { useState, useEffect } from "react";
import { mainQuiz, type QuizQuestion } from "@/lib/data/quiz-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw, Lightbulb, History, Trophy, ListChecks } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define the type for a quiz history item
type QuizHistoryItem = {
  id: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  date: string; // Store as a string, e.g., from toLocaleDateString()
};

const QuizClient: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | null>(null);
  const [loading, setLoading] = useState(true);
  const [quizHistory, setQuizHistory] = useState<QuizHistoryItem[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    // Load questions
    setQuestions(mainQuiz.questions);
    setLoading(false);

    // Load quiz history from localStorage
    const storedHistory = localStorage.getItem("quizHistorySanatana");
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory);
        if (Array.isArray(parsedHistory)) {
          setQuizHistory(parsedHistory);
        }
      } catch (error) {
        console.error("Failed to parse quiz history:", error);
        localStorage.removeItem("quizHistorySanatana"); // Clear corrupted data
      }
    }
  }, []);

  const saveQuizAttempt = (currentScore: number, totalQuestions: number) => {
    if (totalQuestions === 0) return; // Don't save if no questions were there (e.g. error state)

    const newAttempt: QuizHistoryItem = {
      id: `${new Date().toISOString()}-${Math.random().toString(36).substr(2, 9)}`, // More robust unique ID
      quizTitle: mainQuiz.title,
      score: currentScore,
      totalQuestions: totalQuestions,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
    
    // Prepend new attempt and keep only the last 5 attempts
    const updatedHistory = [newAttempt, ...quizHistory].slice(0, 5); 
    setQuizHistory(updatedHistory);
    localStorage.setItem("quizHistorySanatana", JSON.stringify(updatedHistory));
  };

  const handleOptionSelect = (option: string) => {
    if (answerStatus === null) { 
      setSelectedOption(option);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      toast({
        title: "No option selected",
        description: "Please select an answer before submitting.",
        variant: "destructive",
      });
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setAnswerStatus("correct");
      toast({
        title: "Correct!",
        description: "Well done!",
      });
    } else {
      setAnswerStatus("incorrect");
      toast({
        title: "Incorrect",
        description: `The correct answer was: ${currentQuestion.answer}`,
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    const isLastQuestion = currentQuestionIndex >= questions.length - 1;
    
    if (isLastQuestion) {
      setShowScore(true);
      saveQuizAttempt(score, questions.length); // Save attempt when quiz ends
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    setSelectedOption(null);
    setAnswerStatus(null);
  };
  

  const handleRestartQuiz = () => {
    // If currently showing score and there were questions, save the attempt before restarting
    if (showScore && questions.length > 0) {
      // score state is already updated, so this will save the score for the just-finished quiz
      // No need to call saveQuizAttempt again here as it's called in handleNextQuestion when moving to score screen.
    }
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
    setAnswerStatus(null);
     toast({
        title: "Quiz Restarted",
        description: "Good luck!",
      });
  };

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Loading Quiz...</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-64">
          <Lightbulb className="h-16 w-16 text-primary animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  if (questions.length === 0) {
     return (
        <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-lg">
            <CardHeader>
                <CardTitle className="text-2xl text-center text-destructive">Quiz Unavailable</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-foreground/80">No quiz questions are currently available. Please check back later.</p>
            </CardContent>
        </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showScore) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="shadow-2xl bg-gradient-to-br from-background to-secondary/10 rounded-xl mb-8">
          <CardHeader className="text-center pt-8">
            <Trophy className="h-16 w-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-4xl font-extrabold text-primary mb-2">Quiz Completed!</CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              You&apos;ve reached the end of the quiz.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-8 py-8">
            <p className="text-5xl font-bold text-accent">
              Your Score: {score} / {questions.length}
            </p>
            <div className="w-3/4 mx-auto">
              <Progress value={(score / questions.length) * 100} className="h-4 rounded-full" />
            </div>
            <p className="text-xl text-foreground/90 px-4">
              {score > questions.length * 0.7 ? "Excellent! You have a strong understanding." : 
               score > questions.length * 0.4 ? "Good effort! Keep learning to deepen your knowledge." : 
               "Keep learning and try again! Every attempt is a step forward."}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pb-8">
            <Button onClick={handleRestartQuiz} size="lg" className="shadow-lg rounded-lg text-lg px-8 py-3">
              <RotateCcw className="mr-2 h-5 w-5" /> Restart Quiz
            </Button>
          </CardFooter>
        </Card>
        
        {quizHistory.length > 0 && (
          <Card className="shadow-xl rounded-xl bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <History className="mr-3 h-6 w-6" /> Quiz History
              </CardTitle>
              <CardDescription>Your last {quizHistory.length > 5 ? 5 : quizHistory.length} attempts for this quiz.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {quizHistory.map((attempt) => (
                  <li key={attempt.id} className="p-4 border border-border/50 rounded-md bg-background/70 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <p className="font-semibold text-accent">{attempt.quizTitle}</p>
                      <p className="text-sm text-muted-foreground">Date: {attempt.date}</p>
                    </div>
                    <p className="text-lg font-bold text-primary mt-2 sm:mt-0">
                      Score: {attempt.score}/{attempt.totalQuestions}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
             <CardFooter className="pt-4">
                <Button variant="outline" size="sm" onClick={() => {
                    localStorage.removeItem("quizHistorySanatana");
                    setQuizHistory([]);
                    toast({title: "Quiz History Cleared"});
                }}>
                    Clear History
                </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }

    return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl bg-gradient-to-br from-background to-primary/5 rounded-xl">
      <CardHeader className="pt-6">
        <div className="flex justify-between items-center mb-3">
            <CardTitle className="text-2xl md:text-3xl font-semibold text-primary flex items-center">
                <ListChecks className="mr-3 h-7 w-7" /> {mainQuiz.title}
            </CardTitle>
            <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {currentQuestionIndex + 1} / {questions.length}
            </span>
        </div>
        <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} className="w-full h-2.5 rounded-full" />
      </CardHeader>
      <CardContent className="space-y-8 py-8">
        <div>
          <p className="text-sm text-accent font-semibold mb-2 uppercase tracking-wider">Topic: {currentQuestion.topic}</p>
          <h2 className="text-xl md:text-2xl font-medium text-foreground/95 leading-tight">{currentQuestion.question}</h2>
        </div>
        
        <RadioGroup value={selectedOption || ""} onValueChange={handleOptionSelect} className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === option;
            const isCorrect = currentQuestion.answer === option;
            let optionStyle = "border-input hover:border-primary/70 bg-background hover:bg-muted/50";
            let indicatorIcon = null;

            if (answerStatus !== null) { 
              if (isCorrect) {
                optionStyle = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                // Show checkmark if this option is correct (whether selected or not, after answer revealed)
                indicatorIcon = <CheckCircle className="h-5 w-5 text-green-500" />;
              } else if (isSelected && !isCorrect) {
                optionStyle = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
                indicatorIcon = <XCircle className="h-5 w-5 text-red-500" />;
              } else {
                // For non-selected, non-correct options after answer is revealed
                optionStyle += " opacity-70 cursor-not-allowed"; 
              }
            } else if (isSelected) {
                 optionStyle = "ring-2 ring-primary border-primary bg-primary/5";
            }


            return (
              <Label
                key={index}
                htmlFor={`option-${index}`}
                className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${optionStyle} ${
                   answerStatus !== null ? "cursor-not-allowed" : "hover:shadow-md"
                }`}
              >
                <span className="text-base text-foreground/90 flex-1 mr-3">{option}</span>
                <div className="flex items-center">
                    {indicatorIcon}
                    <RadioGroupItem 
                        value={option} 
                        id={`option-${index}`} 
                        className={`ml-3 
                          ${answerStatus !== null && isCorrect ? "border-green-500" : ""}
                          ${answerStatus !== null && isSelected && !isCorrect ? "border-red-500" : ""}
                        `} 
                        disabled={answerStatus !== null} 
                    />
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t pb-6">
        <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            Current Score: <span className="font-semibold text-accent">{score}</span> / {questions.length}
        </div>
        {answerStatus === null ? (
          <Button onClick={handleSubmitAnswer} disabled={!selectedOption} className="w-full sm:w-auto shadow-md rounded-lg px-6 py-2.5 text-base">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="w-full sm:w-auto shadow-md rounded-lg px-6 py-2.5 text-base">
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "View Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizClient;
