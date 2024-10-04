// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import './styles.css';

// const QuizData = [
//     {
//       question: "What is the closest star to Earth, after the Sun?",
//       options: ["Alpha Centauri A", "Proxima Centauri", "Barnard's Star", "Sirius"],
//       correctAnswer: "Proxima Centauri",
//       explanation: "Proxima Centauri, a red dwarf in the Alpha Centauri star system, is the closest known star to the Earth at a distance of approximately 4.24 light-years."
//     },
//     {
//       question: "What is the most common type of star in the Milky Way galaxy?",
//       options: ["Red dwarfs", "Blue giants", "Neutron stars", "White dwarfs"],
//       correctAnswer: "Red dwarfs",
//       explanation: "Red dwarfs are the most common type of star in the Milky Way galaxy, making up about 75% of all stars due to their long lifespans and lower mass."
//     },
//     {
//       question: "Which star is the brightest in the night sky?",
//       options: ["Sirius", "Betelgeuse", "Rigel", "Vega"],
//       correctAnswer: "Sirius",
//       explanation: "Sirius, also known as the Dog Star, is the brightest star in the night sky and is located in the constellation Canis Major, about 8.6 light-years away from Earth."
//     },
//     {
//       question: "What is the final stage in the life cycle of a massive star?",
//       options: ["White dwarf", "Black hole", "Neutron star", "Red giant"],
//       correctAnswer: "Black hole",
//       explanation: "Massive stars end their life cycles either as neutron stars or black holes after undergoing a supernova explosion."
//     },
//     {
//       question: "What element do stars primarily fuse in their cores during the main sequence phase?",
//       options: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
//       correctAnswer: "Hydrogen",
//       explanation: "During the main sequence phase, stars primarily fuse hydrogen into helium through nuclear fusion, which powers the star and produces energy."
//     },
//     {
//       question: "What is the term for a star that suddenly increases in brightness and then gradually fades?",
//       options: ["Supernova", "Nova", "Quasar", "Pulsar"],
//       correctAnswer: "Nova",
//       explanation: "A nova occurs when a white dwarf in a binary system suddenly brightens due to the rapid fusion of accumulated hydrogen from its companion star."
//     },
//     {
//       question: "What is the remnant core of a low to medium-mass star called after it has shed its outer layers?",
//       options: ["Neutron star", "White dwarf", "Black hole", "Brown dwarf"],
//       correctAnswer: "White dwarf",
//       explanation: "After a low to medium-mass star expels its outer layers as a planetary nebula, its core becomes a white dwarf, which gradually cools over time."
//     },
//     {
//       question: "What is the name of the stellar remnant left behind after a supernova explosion?",
//       options: ["Pulsar", "Neutron star", "White dwarf", "Red giant"],
//       correctAnswer: "Neutron star",
//       explanation: "A neutron star is a dense remnant formed after the core collapse of a massive star during a supernova, composed mostly of neutrons."
//     },
//     {
//       question: "Which type of star is known for its rapid rotation and strong magnetic field, often emitting beams of radiation?",
//       options: ["Pulsar", "White dwarf", "Red giant", "Brown dwarf"],
//       correctAnswer: "Pulsar",
//       explanation: "A pulsar is a type of neutron star that rotates rapidly and emits beams of radiation from its magnetic poles, detectable as pulses of radio waves."
//     },
//     {
//       question: "Which spectral class of stars is the hottest?",
//       options: ["O-type", "G-type", "M-type", "K-type"],
//       correctAnswer: "O-type",
//       explanation: "O-type stars are the hottest and most massive stars in the spectral classification system, with surface temperatures exceeding 30,000°C."
//     },
//     {
//       question: "What is the Hertzsprung-Russell diagram used for?",
//       options: ["Classifying galaxies", "Measuring star distances", "Studying stellar evolution", "Tracking dark matter"],
//       correctAnswer: "Studying stellar evolution",
//       explanation: "The Hertzsprung-Russell (H-R) diagram is a tool that astronomers use to classify stars based on their luminosity and temperature, showing how stars evolve over time."
//     },
//     {
//       question: "What is the primary energy source in a star's core once hydrogen is exhausted?",
//       options: ["Helium fusion", "Carbon fusion", "Hydrogen burning", "Neutrino emission"],
//       correctAnswer: "Helium fusion",
//       explanation: "After hydrogen is depleted in a star's core, it begins fusing helium into heavier elements, which occurs during the red giant phase of stellar evolution."
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
//       <h2 className={`text-2xl mb-4 ${answered ? 'text-white' : ''}`}>Question {questionNumber} of 10</h2>
//       <p className={`text-xl mb-4 ${answered ? 'text-white' : ''}`}>{question.question} </p>
//       <div className="space-y-2">
//         {question.options.map((option, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`w-full p-2 rounded ${
//               answered
//                 ? option === question.correctAnswer
//                   ? 'bg-white'
//                   : 'bg-[#6F758B]'
//                 : 'bg-[#9A9BAE ] hover:bg-[#9A9BAE]'
//             } transition-colors duration-300`}
//             onClick={() => !answered && onAnswer(option === question.correctAnswer)}
//             disabled={answered}
//           >
//             {option}
//           </motion.button>
//         ))}
//       </div>
//       {answered && (
//         <div className="mt-4 text- black">
//           <p className="font-bold text-white">Explanation:</p>
//           <p className="font-bold text-white">{question.explanation}</p>
//           <button
//             className="mt-4 px-4 py-2 bg-[#4B0082] hover:bg-[#4B0082] rounded transition-colors duration-300 text-white"
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
//       className="w-full max-w-2xl p-6 bg-transparent backdrop-blur-xl border-9 border-white rounded-lg shadow-xl text-[#191970]

//       "
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

// export default function StarsQuiz() {
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
//         <source src="/Stars.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="relative z-10">
//         <Quiz />
//       </div>
//     </div>
//   )
// }
// ==============================================
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import "./styles.css";
import "../../../components/manual-ui/styles.css";

// Defining the type for a single quiz question
interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const QuizData: QuizItem[] = [
  {
    question: "What is the closest star to Earth, after the Sun?",
    options: [
      "Alpha Centauri A",
      "Proxima Centauri",
      "Barnard's Star",
      "Sirius",
    ],
    correctAnswer: "Proxima Centauri",
    explanation:
      "Proxima Centauri, a red dwarf in the Alpha Centauri star system, is the closest known star to the Earth at a distance of approximately 4.24 light-years.",
  },
  {
    question: "What is the most common type of star in the Milky Way galaxy?",
    options: ["Red dwarfs", "Blue giants", "Neutron stars", "White dwarfs"],
    correctAnswer: "Red dwarfs",
    explanation:
      "Red dwarfs are the most common type of star in the Milky Way galaxy, making up about 75% of all stars due to their long lifespans and lower mass.",
  },
  {
    question: "Which star is the brightest in the night sky?",
    options: ["Sirius", "Betelgeuse", "Rigel", "Vega"],
    correctAnswer: "Sirius",
    explanation:
      "Sirius, also known as the Dog Star, is the brightest star in the night sky and is located in the constellation Canis Major, about 8.6 light-years away from Earth.",
  },
  {
    question: "What is the final stage in the life cycle of a massive star?",
    options: ["White dwarf", "Black hole", "Neutron star", "Red giant"],
    correctAnswer: "Black hole",
    explanation:
      "Massive stars end their life cycles either as neutron stars or black holes after undergoing a supernova explosion.",
  },
  {
    question:
      "What element do stars primarily fuse in their cores during the main sequence phase?",
    options: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
    correctAnswer: "Hydrogen",
    explanation:
      "During the main sequence phase, stars primarily fuse hydrogen into helium through nuclear fusion, which powers the star and produces energy.",
  },
  {
    question:
      "What is the term for a star that suddenly increases in brightness and then gradually fades?",
    options: ["Supernova", "Nova", "Quasar", "Pulsar"],
    correctAnswer: "Nova",
    explanation:
      "A nova occurs when a white dwarf in a binary system suddenly brightens due to the rapid fusion of accumulated hydrogen from its companion star.",
  },
  {
    question:
      "What is the remnant core of a low to medium-mass star called after it has shed its outer layers?",
    options: ["Neutron star", "White dwarf", "Black hole", "Brown dwarf"],
    correctAnswer: "White dwarf",
    explanation:
      "After a low to medium-mass star expels its outer layers as a planetary nebula, its core becomes a white dwarf, which gradually cools over time.",
  },
  {
    question:
      "What is the name of the stellar remnant left behind after a supernova explosion?",
    options: ["Pulsar", "Neutron star", "White dwarf", "Red giant"],
    correctAnswer: "Neutron star",
    explanation:
      "A neutron star is a dense remnant formed after the core collapse of a massive star during a supernova, composed mostly of neutrons.",
  },
  {
    question:
      "Which type of star is known for its rapid rotation and strong magnetic field, often emitting beams of radiation?",
    options: ["Pulsar", "White dwarf", "Red giant", "Brown dwarf"],
    correctAnswer: "Pulsar",
    explanation:
      "A pulsar is a type of neutron star that rotates rapidly and emits beams of radiation from its magnetic poles, detectable as pulses of radio waves.",
  },
  {
    question: "Which spectral class of stars is the hottest?",
    options: ["O-type", "G-type", "M-type", "K-type"],
    correctAnswer: "O-type",
    explanation:
      "O-type stars are the hottest and most massive stars in the spectral classification system, with surface temperatures exceeding 30,000°C.",
  },
  {
    question: "What is the Hertzsprung-Russell diagram used for?",
    options: [
      "Classifying galaxies",
      "Measuring star distances",
      "Studying stellar evolution",
      "Tracking dark matter",
    ],
    correctAnswer: "Studying stellar evolution",
    explanation:
      "The Hertzsprung-Russell (H-R) diagram is a tool that astronomers use to classify stars based on their luminosity and temperature, showing how stars evolve over time.",
  },
  {
    question:
      "What is the primary energy source in a star's core once hydrogen is exhausted?",
    options: [
      "Helium fusion",
      "Carbon fusion",
      "Hydrogen burning",
      "Neutrino emission",
    ],
    correctAnswer: "Helium fusion",
    explanation:
      "After hydrogen is depleted in a star's core, it begins fusing helium into heavier elements, which occurs during the red giant phase of stellar evolution.",
  },
];

// Shuffle the array of questions
function shuffleArray(array: QuizItem[]): QuizItem[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Define props for the QuizQuestion component
interface QuizQuestionProps {
  question: QuizItem;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  answered: boolean;
  questionNumber: number;
}

// QuizQuestion component
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
                  ? "bg-white"
                  : "bg-[#6F758B]"
                : "bg-[#9A9BAE ] hover:bg-[#9A9BAE]"
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
        <div className="mt-4 text-black">
          <p className="font-bold text-white">Explanation:</p>
          <p className="font-bold text-white">{question.explanation}</p>
          <button
            className="mt-4 px-4 py-2 bg-[#4B0082] hover:bg-[#4B0082] rounded transition-colors duration-300 text-white"
            onClick={onNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

// Result component
interface ResultProps {
  score: number;
  onRestart: () => void;
}

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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors duration-300"
        onClick={() => window.close()}
      >
        Exit Quiz
      </motion.button>
    </div>
  );
};

// Quiz component
const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(QuizData).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

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
      className="w-full max-w-2xl p-6 bg-transparent backdrop-blur-xl border-9 border-white rounded-lg shadow-xl text-[#191970]"
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

// StarsQuiz component with video background
const StarsQuiz: React.FC = () => {
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
        <source src="/Stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Quiz />
      </div>
    </div>
  );
};

export default StarsQuiz;
