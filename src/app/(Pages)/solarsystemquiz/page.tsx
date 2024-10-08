// ==========================================
"use client";
import { useRouter, Router } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../../components/manual-ui/styles.css";
// Define types for Quiz Data
interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Type for props of QuizQuestion component
interface QuizQuestionProps {
  question: QuizItem;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  answered: boolean;
  questionNumber: number;
}

// Type for props of Result component
interface ResultProps {
  score: number;
  onRestart: () => void;
}

// Quiz data
const QuizData: QuizItem[] = [
  {
    question: "What is the approximate age of the solar system?",
    options: [
      "3.5 billion years",
      "4.6 billion years",
      "5.2 billion years",
      "6 billion years",
    ],
    correctAnswer: "4.6 billion years",
    explanation:
      "The solar system formed approximately 4.6 billion years ago from the gravitational collapse of a region within a large molecular cloud.",
  },
  {
    question:
      "What is the name of the boundary that marks the edge of the Sun's influence, where solar winds cease?",
    options: ["Heliopause", "Kuiper Belt", "Oort Cloud", "Asteroid Belt"],
    correctAnswer: "Heliopause",
    explanation:
      "The heliopause is the boundary where the Sun's solar wind is stopped by the interstellar medium, marking the outer limits of the Sun's influence.",
  },
  {
    question:
      "Which planet rotates the opposite way to most other planets in the solar system?",
    options: ["Venus", "Mars", "Jupiter", "Neptune"],
    correctAnswer: "Venus",
    explanation:
      "Venus has a retrograde rotation, meaning it rotates in the opposite direction to most other planets, including Earth.",
  },
  {
    question:
      "Which moon in our solar system has a thick atmosphere and is known for its lakes of liquid methane?",
    options: ["Titan", "Europa", "Io", "Ganymede"],
    correctAnswer: "Titan",
    explanation:
      "Titan, Saturn's largest moon, has a thick atmosphere and surface lakes of liquid methane and ethane, making it unique in the solar system.",
  },
  {
    question: "What is the primary reason for Neptune's blue color?",
    options: [
      "Methane in the atmosphere",
      "Water vapor",
      "Iron oxide",
      "Sulfur dioxide",
    ],
    correctAnswer: "Methane in the atmosphere",
    explanation:
      "Neptune's blue color is primarily due to the presence of methane in its atmosphere, which absorbs red light and reflects blue light.",
  },
  {
    question: "What is the largest known dwarf planet in our solar system?",
    options: ["Pluto", "Eris", "Haumea", "Makemake"],
    correctAnswer: "Eris",
    explanation:
      "Eris is a dwarf planet located in the scattered disk region of the solar system and is slightly more massive than Pluto, making it the largest known dwarf planet.",
  },
  {
    question: "What is the cause of the strong magnetic field of Jupiter?",
    options: [
      "Liquid metallic hydrogen",
      "Iron core",
      "Silicate mantle",
      "Surface storms",
    ],
    correctAnswer: "Liquid metallic hydrogen",
    explanation:
      "Jupiter's strong magnetic field is generated by the movement of liquid metallic hydrogen deep within the planet's interior.",
  },
  {
    question:
      "Which planet has the most eccentric (elongated) orbit in our solar system?",
    options: ["Mercury", "Mars", "Pluto", "Neptune"],
    correctAnswer: "Mercury",
    explanation:
      "Mercury has the most eccentric orbit, meaning its orbit is more elliptical than any other planet, varying its distance from the Sun significantly.",
  },
  {
    question: "What is the primary component of the Martian atmosphere?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
    correctAnswer: "Carbon dioxide",
    explanation:
      "The atmosphere of Mars is composed mostly of carbon dioxide (about 95%), with small amounts of nitrogen and argon.",
  },
  {
    question: "What is the most volcanically active body in the solar system?",
    options: ["Io", "Venus", "Earth", "Mars"],
    correctAnswer: "Io",
    explanation:
      "Io, one of Jupiter's moons, is the most volcanically active body in the solar system, with hundreds of active volcanoes due to tidal heating from Jupiter's gravity.",
  },
  {
    question:
      "Which planet's day (rotation period) is longer than its year (orbital period)?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Venus",
    explanation:
      "Venus has an extremely slow rotation, taking about 243 Earth days to complete one rotation, while its orbit around the Sun takes only about 225 Earth days.",
  },
  {
    question: "What is the approximate surface temperature of the Sun?",
    options: ["3,500°C", "5,500°C", "8,000°C", "10,000°C"],
    correctAnswer: "5,500°C",
    explanation:
      "The surface temperature of the Sun, or its photosphere, is approximately 5,500°C, while its core reaches temperatures of about 15 million°C.",
  },
];

// Shuffle the array of questions randomly
function shuffleArray(array: QuizItem[]): QuizItem[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// QuizQuestion component to display individual question and options
const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onNext,
  answered,
  questionNumber,
}) => {
  return (
    <div className="space-y-4">
      <h2 className={`text-2xl mb-4 ${answered ? "text-white" : ""}`}>
        Question {questionNumber} of 10
      </h2>
      <p className={`text-xl mb-4 ${answered ? "text-white" : ""}`}>
        {question.question}{" "}
      </p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-2 rounded ${
              answered
                ? option === question.correctAnswer
                  ? "bg-[#6F758B]"
                  : "bg-black"
                : "bg-[#9A9BAE] hover:bg-[#9A9BAE]"
            } transition-colors duration-300`}
            onClick={() =>
              !answered && onAnswer(option === question.correctAnswer)
            }
            disabled={answered}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {answered && (
        <div className="mt-4">
          <p className="font-bold">Explanation:</p>
          <p>{question.explanation}</p>
          <button
            className="mt-4 px-4 py-2 bg-[#4B0082] hover:bg-[#4B0082] rounded transition-colors duration-300"
            onClick={onNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

// Result component to display final score and options to restart or exit
const Result: React.FC<ResultProps> = ({ score, onRestart }) => {

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-2xl mb-4">Your score: {score} out of 10</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded mr-2 transition-colors duration-300"
        onClick={onRestart}
      >
        Restart Quiz
      </motion.button>

 <Link href="/spacequiz">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors duration-300"
        // onClick={() => router.push("/spacequiz")} // Use router.push for navigation
        
        >
        Exit Quiz
      </motion.button>
        </Link>    

    </div>
  );
};

// Main Quiz component to handle quiz state and logic
const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false);

  // Shuffle questions and set them on component mount
  useEffect(() => {
    const shuffledQuestions = shuffleArray(QuizData).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  // Handle when an answer is selected
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    setAnswered(true);
  };

  // Move to the next question or show results if it was the last question
  const handleNext = () => {
    setAnswered(false);
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Restart the quiz
  const restartQuiz = () => {
    setQuestions(shuffleArray(QuizData).slice(0, 10));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  // Loading state until the questions are loaded
  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-xl text-white"
    >
      {!showResult ? (
        <QuizQuestion
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          answered={answered}
          questionNumber={currentQuestion + 1}
        />
      ) : (
        <Result score={score} onRestart={restartQuiz} />
      )}
    </motion.div>
  );
};

// Main component to render the quiz and background video
const SolarSystemQuiz: React.FC = () => {
  return (
    <div id="quiz-container" className="relative w-full h-full">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/Solar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Quiz />
      </div>
    </div>
  );
};

export default SolarSystemQuiz;
