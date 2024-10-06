// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import './styles.css';

// const QuizData = [
//     {
//       question: "What was the first artificial satellite launched by NASA?",
//       options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Telstar 1"],
//       correctAnswer: "Explorer 1",
//       explanation: "Explorer 1 was NASA's first artificial satellite, launched on January 31, 1958. It discovered the Van Allen radiation belts around Earth."
//     },
//     {
//       question: "Which NASA satellite was the first to map the entire surface of the Moon?",
//       options: ["Lunar Reconnaissance Orbiter", "Pioneer 4", "Ranger 7", "Surveyor 1"],
//       correctAnswer: "Lunar Reconnaissance Orbiter",
//       explanation: "Launched in 2009, the Lunar Reconnaissance Orbiter (LRO) mapped the Moon in high resolution, helping scientists plan future missions."
//     },
//     {
//       question: "Which satellite was launched to study the Earth's atmosphere and its interactions with solar radiation?",
//       options: ["Aqua", "Terra", "Solar and Heliospheric Observatory (SOHO)", "ICESat"],
//       correctAnswer: "Solar and Heliospheric Observatory (SOHO)",
//       explanation: "SOHO was launched in 1995 to study the Sun and its influence on Earth's climate and atmosphere, providing critical data about solar radiation."
//     },
//     {
//       question: "Which NASA satellite is primarily responsible for observing Earth's oceans and climate change?",
//       options: ["TOPEX/Poseidon", "Aqua", "Jason-3", "Terra"],
//       correctAnswer: "Jason-3",
//       explanation: "Jason-3, launched in 2016, monitors global sea levels and provides critical data for understanding climate change, building on the work of earlier missions like TOPEX/Poseidon."
//     },
//     {
//       question: "What was the purpose of the GRACE mission launched by NASA in 2002?",
//       options: ["Mapping Earth's gravity field", "Observing solar flares", "Monitoring air pollution", "Tracking global cloud cover"],
//       correctAnswer: "Mapping Earth's gravity field",
//       explanation: "The GRACE (Gravity Recovery and Climate Experiment) satellites were launched to map variations in Earth's gravitational field and study water movement and ice melt."
//     },
//     {
//       question: "Which satellite mission was launched to study Earth's cryosphere and monitor ice sheet mass changes?",
//       options: ["ICESat-2", "Aqua", "Landsat 8", "Hubble Space Telescope"],
//       correctAnswer: "ICESat-2",
//       explanation: "ICESat-2, launched in 2018, measures changes in ice sheet thickness and mass, crucial for understanding sea-level rise and climate change."
//     },
//     {
//       question: "Which NASA satellite was designed to observe gamma-ray bursts in space?",
//       options: ["Swift", "Chandra X-ray Observatory", "Kepler", "Hubble Space Telescope"],
//       correctAnswer: "Swift",
//       explanation: "Launched in 2004, the Swift satellite is dedicated to detecting and studying gamma-ray bursts, the most energetic explosions in the universe."
//     },
//     {
//       question: "What is the primary function of the NASA Terra satellite?",
//       options: ["Earth's surface and climate monitoring", "Monitoring space debris", "Mars exploration", "Tracking asteroids"],
//       correctAnswer: "Earth's surface and climate monitoring",
//       explanation: "Terra, launched in 1999, is a flagship satellite for monitoring Earth's land, atmosphere, and oceans, contributing valuable data on climate change."
//     },
//     {
//       question: "Which satellite was responsible for finding thousands of exoplanets by observing distant stars?",
//       options: ["Kepler", "Voyager 2", "Juno", "Galileo"],
//       correctAnswer: "Kepler",
//       explanation: "Kepler, launched in 2009, was NASA's primary mission for detecting exoplanets by observing the slight dimming of stars caused by planets passing in front of them."
//     },
//     {
//       question: "Which satellite is responsible for detecting cosmic microwave background radiation from the early universe?",
//       options: ["Cosmic Background Explorer (COBE)", "James Webb Space Telescope", "Fermi Gamma-ray Space Telescope", "Spitzer Space Telescope"],
//       correctAnswer: "Cosmic Background Explorer (COBE)",
//       explanation: "COBE, launched in 1989, provided the first precise measurements of the cosmic microwave background radiation, supporting the Big Bang theory."
//     },
//     {
//       question: "Which NASA satellite was the first to capture detailed infrared images of distant stars and galaxies?",
//       options: ["Spitzer Space Telescope", "Hubble Space Telescope", "Chandra X-ray Observatory", "WISE"],
//       correctAnswer: "Spitzer Space Telescope",
//       explanation: "The Spitzer Space Telescope, launched in 2003, captured detailed infrared images of distant celestial objects, contributing to our understanding of star formation and galaxies."
//     },
//     {
//       question: "Which NASA satellite mission focused on measuring the Sun’s magnetic field and its influence on space weather?",
//       options: ["Parker Solar Probe", "Voyager 1", "Magnetospheric Multiscale (MMS)", "Solar Dynamics Observatory (SDO)"],
//       correctAnswer: "Solar Dynamics Observatory (SDO)",
//       explanation: "Launched in 2010, SDO provides continuous, detailed observations of the Sun, helping scientists understand solar activity and its impact on Earth's space weather."
//     }
//   ];

// function shuffleArray(array) {
//   const shuffled = [...array]
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
//   }
//   return shuffled
// }

// function QuizQuestion({ question, onAnswer, onNext, answered, questionNumber }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold mb-4">Question {questionNumber} of 10</h2>
//       <p className="text-xl mb-4">{question.question}</p>
//       <div className="space-y-2">
//         {question.options.map((option, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`w-full p-2 rounded ${
//               answered
//                 ? option === question.correctAnswer
//                 ? 'bg-[#6F758B]'
//                 : 'bg-black'
//               : 'bg-[#6F758B ] hover:bg-[#6F758B]'
//             } transition-colors duration-300`}
//             onClick={() => !answered && onAnswer(option === question.correctAnswer)}
//             disabled={answered}
//           >
//             {option}
//           </motion.button>
//         ))}
//       </div>
//       {answered && (
//         <div className="mt-4">
//           <p className="font-bold">Explanation:</p>
//           <p>{question.explanation}</p>
//           <button
//             className="mt-4 px-4 py-2 bg-[#4B0082] hover:bg-[#4B0082] rounded transition-colors duration-300"
//             onClick={onNext}
//           >
//             Next Question
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// function Result({ score, onRestart }) {
//   return (
//     <div className="text-center">
//       <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
//       <p className="text-2xl mb-4">
//         Your score: {score} out of 10
//       </p>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded mr-2 transition-colors duration-300"
//         onClick={onRestart}
//       >
//         Restart Quiz
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors duration-300"
//         onClick={() => window.close()}
//       >
//         Exit Quiz
//       </motion.button>
//     </div>
//   )
// }

// function Quiz() {
//   const [questions, setQuestions] = useState([])
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [score, setScore] = useState(0)
//   const [showResult, setShowResult] = useState(false)
//   const [answered, setAnswered] = useState(false)

//   useEffect(() => {
//     const shuffledQuestions = shuffleArray(QuizData).slice(0, 10)
//     setQuestions(shuffledQuestions)
//   }, [])

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) setScore(score + 1)
//     setAnswered(true)
//   }

//   const handleNext = () => {
//     setAnswered(false)
//     if (currentQuestion < 9) {
//       setCurrentQuestion(currentQuestion + 1)
//     } else {
//       setShowResult(true)
//     }
//   }

//   const restartQuiz = () => {
//     setQuestions(shuffleArray(QuizData).slice(0, 10))
//     setCurrentQuestion(0)
//     setScore(0)
//     setShowResult(false)
//     setAnswered(false)
//   }

//   if (questions.length === 0) return <div>Loading...</div>

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full max-w-2xl p-6 bg-transparent backdrop-blur-xl border-9 border-white rounded-lg shadow-xl text-white"
//     >

//       {!showResult ? (
//         <QuizQuestion
//           question={questions[currentQuestion]}
//           onAnswer={handleAnswer}
//           onNext={handleNext}
//           answered={answered}
//           questionNumber={currentQuestion + 1}
//         />
//       ) : (
//         <Result score={score} onRestart={restartQuiz} />
//       )}
//     </motion.div>
//   )
// }

// export default function SatelliteQuiz() {
//   return (
//    <div id="quiz-container">
//       <video
//         id="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover"
//       >
//         <source src="/Satellite.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="relative z-10">
//         <Quiz />
//       </div>
//     </div>
//   )
// }
// =========================================================
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import "./styles.css";
import "../../../components/manual-ui/styles.css";

// Define the types for the quiz data
interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizQuestionProps {
  question: QuizItem;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  answered: boolean;
  questionNumber: number;
}

interface ResultProps {
  score: number;
  onRestart: () => void;
}

// Define the quiz data with the new types
const QuizData: QuizItem[] = [
  {
    question: "What was the first artificial satellite launched by NASA?",
    options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Telstar 1"],
    correctAnswer: "Explorer 1",
    explanation:
      "Explorer 1 was NASA's first artificial satellite, launched on January 31, 1958. It discovered the Van Allen radiation belts around Earth.",
  },
  {
    question:
      "Which NASA satellite was the first to map the entire surface of the Moon?",
    options: [
      "Lunar Reconnaissance Orbiter",
      "Pioneer 4",
      "Ranger 7",
      "Surveyor 1",
    ],
    correctAnswer: "Lunar Reconnaissance Orbiter",
    explanation:
      "Launched in 2009, the Lunar Reconnaissance Orbiter (LRO) mapped the Moon in high resolution, helping scientists plan future missions.",
  },
  {
    question:
      "Which satellite was launched to study the Earth's atmosphere and its interactions with solar radiation?",
    options: [
      "Aqua",
      "Terra",
      "Solar and Heliospheric Observatory (SOHO)",
      "ICESat",
    ],
    correctAnswer: "Solar and Heliospheric Observatory (SOHO)",
    explanation:
      "SOHO was launched in 1995 to study the Sun and its influence on Earth's climate and atmosphere, providing critical data about solar radiation.",
  },
  {
    question:
      "Which NASA satellite is primarily responsible for observing Earth's oceans and climate change?",
    options: ["TOPEX/Poseidon", "Aqua", "Jason-3", "Terra"],
    correctAnswer: "Jason-3",
    explanation:
      "Jason-3, launched in 2016, monitors global sea levels and provides critical data for understanding climate change, building on the work of earlier missions like TOPEX/Poseidon.",
  },
  {
    question:
      "What was the purpose of the GRACE mission launched by NASA in 2002?",
    options: [
      "Mapping Earth's gravity field",
      "Observing solar flares",
      "Monitoring air pollution",
      "Tracking global cloud cover",
    ],
    correctAnswer: "Mapping Earth's gravity field",
    explanation:
      "The GRACE (Gravity Recovery and Climate Experiment) satellites were launched to map variations in Earth's gravitational field and study water movement and ice melt.",
  },
  {
    question:
      "Which satellite mission was launched to study Earth's cryosphere and monitor ice sheet mass changes?",
    options: ["ICESat-2", "Aqua", "Landsat 8", "Hubble Space Telescope"],
    correctAnswer: "ICESat-2",
    explanation:
      "ICESat-2, launched in 2018, measures changes in ice sheet thickness and mass, crucial for understanding sea-level rise and climate change.",
  },
  {
    question:
      "Which NASA satellite was designed to observe gamma-ray bursts in space?",
    options: [
      "Swift",
      "Chandra X-ray Observatory",
      "Kepler",
      "Hubble Space Telescope",
    ],
    correctAnswer: "Swift",
    explanation:
      "Launched in 2004, the Swift satellite is dedicated to detecting and studying gamma-ray bursts, the most energetic explosions in the universe.",
  },
  {
    question: "What is the primary function of the NASA Terra satellite?",
    options: [
      "Earth's surface and climate monitoring",
      "Monitoring space debris",
      "Mars exploration",
      "Tracking asteroids",
    ],
    correctAnswer: "Earth's surface and climate monitoring",
    explanation:
      "Terra, launched in 1999, is a flagship satellite for monitoring Earth's land, atmosphere, and oceans, contributing valuable data on climate change.",
  },
  {
    question:
      "Which satellite was responsible for finding thousands of exoplanets by observing distant stars?",
    options: ["Kepler", "Voyager 2", "Juno", "Galileo"],
    correctAnswer: "Kepler",
    explanation:
      "Kepler, launched in 2009, was NASA's primary mission for detecting exoplanets by observing the slight dimming of stars caused by planets passing in front of them.",
  },
  {
    question:
      "Which satellite is responsible for detecting cosmic microwave background radiation from the early universe?",
    options: [
      "Cosmic Background Explorer (COBE)",
      "James Webb Space Telescope",
      "Fermi Gamma-ray Space Telescope",
      "Spitzer Space Telescope",
    ],
    correctAnswer: "Cosmic Background Explorer (COBE)",
    explanation:
      "COBE, launched in 1989, provided the first precise measurements of the cosmic microwave background radiation, supporting the Big Bang theory.",
  },
  {
    question:
      "Which NASA satellite was the first to capture detailed infrared images of distant stars and galaxies?",
    options: [
      "Spitzer Space Telescope",
      "Hubble Space Telescope",
      "Chandra X-ray Observatory",
      "WISE",
    ],
    correctAnswer: "Spitzer Space Telescope",
    explanation:
      "The Spitzer Space Telescope, launched in 2003, captured detailed infrared images of distant celestial objects, contributing to our understanding of star formation and galaxies.",
  },
  {
    question:
      "Which NASA satellite mission focused on measuring the Sun’s magnetic field and its influence on space weather?",
    options: [
      "Parker Solar Probe",
      "Voyager 1",
      "Magnetospheric Multiscale (MMS)",
      "Solar Dynamics Observatory (SDO)",
    ],
    correctAnswer: "Solar Dynamics Observatory (SDO)",
    explanation:
      "Launched in 2010, SDO provides continuous, detailed observations of the Sun, helping scientists understand solar activity and its impact on Earth's space weather.",
  },
];

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Quiz Question Component
function QuizQuestion({
  question,
  onAnswer,
  onNext,
  answered,
  questionNumber,
}: QuizQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        Question {questionNumber} of 10
      </h2>
      <p className="text-xl mb-4">{question.question}</p>
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
                : "bg-[#6F758B] hover:bg-[#6F758B]"
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
}

// Result Component
function Result({ score, onRestart }: ResultProps) {
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
        onClick={() => window.close()}
        >
        Exit Quiz
      </motion.button>
        </Link>
    </div>
  );
}

// Main Quiz Component
function Quiz() {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false);

  // Shuffle the questions on initial load
  useEffect(() => {
    const shuffledQuestions = shuffleArray(QuizData).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  // Handle the answer logic (correct or incorrect)
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    setAnswered(true);
  };

  // Move to the next question or show the result if it's the last question
  const handleNext = () => {
    setAnswered(false);
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Restart the quiz by resetting all states
  const restartQuiz = () => {
    setQuestions(shuffleArray(QuizData).slice(0, 10));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl p-6 bg-transparent backdrop-blur-xl border-9 border-white rounded-lg shadow-xl text-white"
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
}

// Main SatelliteQuiz Component (Wraps the Quiz)
export default function SatelliteQuiz() {
  return (
    <div id="quiz-container">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/Satellite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Quiz />
      </div>
    </div>
  );
}
