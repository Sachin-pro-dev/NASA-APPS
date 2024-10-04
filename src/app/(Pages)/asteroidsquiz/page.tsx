
// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import './styles.css';


// const QuizData = [
//   {
//     question: "What is the largest asteroid in the asteroid belt between Mars and Jupiter?",
//     options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
//     correctAnswer: "Ceres",
//     explanation: "Ceres is the largest object in the asteroid belt and is also classified as a dwarf planet. It accounts for about 25% of the asteroid belt's total mass."
//   },
//   {
//     question: "Which mission was the first to return a sample from an asteroid?",
//     options: ["OSIRIS-REx", "Hayabusa", "Dawn", "Rosetta"],
//     correctAnswer: "Hayabusa",
//     explanation: "Japan's Hayabusa mission, launched by JAXA, was the first mission to return a sample from the asteroid Itokawa in 2010."
//   },
//   {
//     question: "What is the primary composition of most asteroids in the asteroid belt?",
//     options: ["Silicates and nickel-iron", "Hydrogen and helium", "Methane ice", "Carbon dioxide"],
//     correctAnswer: "Silicates and nickel-iron",
//     explanation: "Most asteroids are made up of silicate rock and metals like nickel and iron, particularly in the asteroid belt between Mars and Jupiter."
//   },
//   {
//     question: "Which asteroid is considered a potential hazard to Earth due to its proximity and size?",
//     options: ["Apophis", "Bennu", "Vesta", "Eros"],
//     correctAnswer: "Apophis",
//     explanation: "Apophis is a near-Earth asteroid that has been closely monitored due to its potential risk of impacting Earth in the future, although recent data has ruled out a near-term impact."
//   },
//   {
//     question: "What type of asteroid is composed mainly of carbon and makes up the majority of asteroids?",
//     options: ["C-type", "S-type", "M-type", "V-type"],
//     correctAnswer: "C-type",
//     explanation: "C-type (carbonaceous) asteroids are the most common and consist mostly of carbon-rich materials. They are dark in color and account for more than 75% of known asteroids."
//   },
//   {
//     question: "What is the primary reason asteroids have irregular shapes, unlike planets?",
//     options: ["Lack of sufficient gravity", "Collisions with other bodies", "Low temperature", "Fast rotation"],
//     correctAnswer: "Lack of sufficient gravity",
//     explanation: "Asteroids have irregular shapes because their gravity is not strong enough to pull them into a spherical shape, unlike planets that have higher mass and gravitational force."
//   },
//   {
//     question: "Which asteroid is the target of NASA's OSIRIS-REx mission, known for its rich organic material?",
//     options: ["Bennu", "Ryugu", "Itokawa", "Eros"],
//     correctAnswer: "Bennu",
//     explanation: "Bennu is a carbonaceous near-Earth asteroid targeted by NASA's OSIRIS-REx mission, which returned a sample from the asteroid rich in organic materials."
//   },
//   {
//     question: "What distinguishes a 'Trojan asteroid' from other types of asteroids?",
//     options: ["It shares an orbit with a planet", "It is made entirely of ice", "It orbits between Mars and Jupiter", "It is found in the Kuiper belt"],
//     correctAnswer: "It shares an orbit with a planet",
//     explanation: "Trojan asteroids share an orbit with a planet, residing in the Lagrange points, either ahead of or behind the planet in its orbital path. Many of Jupiter's Trojans are well-known examples."
//   },
//   {
//     question: "Which asteroid impact is believed to have caused the mass extinction event that wiped out the dinosaurs?",
//     options: ["Chicxulub", "Apophis", "Hoba", "Toutatis"],
//     correctAnswer: "Chicxulub",
//     explanation: "The Chicxulub asteroid impact, about 66 million years ago, is widely believed to have caused the mass extinction event that led to the demise of the dinosaurs and many other species."
//   },
//   {
//     question: "Which asteroid has a large crater named Rheasilvia, created by a massive impact?",
//     options: ["Vesta", "Ceres", "Pallas", "Eros"],
//     correctAnswer: "Vesta",
//     explanation: "Vesta, one of the largest asteroids in the asteroid belt, has a massive crater named Rheasilvia, which is nearly 500 km in diameter, created by a significant impact."
//   },
//   {
//     question: "Which asteroid is known for its binary system, with a small moon orbiting it?",
//     options: ["Ida", "Gaspra", "Itokawa", "Toutatis"],
//     correctAnswer: "Ida",
//     explanation: "Ida, a large asteroid in the asteroid belt, is known for its small moon Dactyl, making it part of a binary asteroid system."
//   },
//   {
//     question: "What is the term for asteroids that pass close to Earth's orbit?",
//     options: ["Near-Earth Objects (NEOs)", "Kuiper Belt Objects (KBOs)", "Dwarf planets", "Centaur objects"],
//     correctAnswer: "Near-Earth Objects (NEOs)",
//     explanation: "Near-Earth Objects (NEOs) are asteroids or comets whose orbits bring them close to Earth's orbit. These objects are closely monitored due to potential impact risks."
//   }
// ];


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
//                   ? 'bg-[#6F758B]'
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
//             className="mt-4 px-4 py-2 bg-[#BDB76B] hover:bg-[#BDB76B] rounded transition-colors duration-300"
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
//       className="w-full max-w-2xl p-6 backdrop-blur-xl bg-transparent rounded-lg shadow-xl text-white"
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

// export default function AsteroidsQuiz() {
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
//         <source src="/Asteroids.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="relative z-10">
//         <Quiz />
//       </div>
//     </div>
//   )
// }
// ===========================================================
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../../../components/manual-ui/styles.css"
// Type definitions for Quiz Data
interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const QuizData: QuizItem[] = [
  {
    question: "What is the largest asteroid in the asteroid belt between Mars and Jupiter?",
    options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
    correctAnswer: "Ceres",
    explanation: "Ceres is the largest object in the asteroid belt and is also classified as a dwarf planet. It accounts for about 25% of the asteroid belt's total mass."
  },
  {
    question: "Which mission was the first to return a sample from an asteroid?",
    options: ["OSIRIS-REx", "Hayabusa", "Dawn", "Rosetta"],
    correctAnswer: "Hayabusa",
    explanation: "Japan's Hayabusa mission, launched by JAXA, was the first mission to return a sample from the asteroid Itokawa in 2010."
  },
  {
    question: "What is the primary composition of most asteroids in the asteroid belt?",
    options: ["Silicates and nickel-iron", "Hydrogen and helium", "Methane ice", "Carbon dioxide"],
    correctAnswer: "Silicates and nickel-iron",
    explanation: "Most asteroids are made up of silicate rock and metals like nickel and iron, particularly in the asteroid belt between Mars and Jupiter."
  },
  {
    question: "Which asteroid is considered a potential hazard to Earth due to its proximity and size?",
    options: ["Apophis", "Bennu", "Vesta", "Eros"],
    correctAnswer: "Apophis",
    explanation: "Apophis is a near-Earth asteroid that has been closely monitored due to its potential risk of impacting Earth in the future, although recent data has ruled out a near-term impact."
  },
  {
    question: "What type of asteroid is composed mainly of carbon and makes up the majority of asteroids?",
    options: ["C-type", "S-type", "M-type", "V-type"],
    correctAnswer: "C-type",
    explanation: "C-type (carbonaceous) asteroids are the most common and consist mostly of carbon-rich materials. They are dark in color and account for more than 75% of known asteroids."
  },
  {
    question: "What is the primary reason asteroids have irregular shapes, unlike planets?",
    options: ["Lack of sufficient gravity", "Collisions with other bodies", "Low temperature", "Fast rotation"],
    correctAnswer: "Lack of sufficient gravity",
    explanation: "Asteroids have irregular shapes because their gravity is not strong enough to pull them into a spherical shape, unlike planets that have higher mass and gravitational force."
  },
  {
    question: "Which asteroid is the target of NASA's OSIRIS-REx mission, known for its rich organic material?",
    options: ["Bennu", "Ryugu", "Itokawa", "Eros"],
    correctAnswer: "Bennu",
    explanation: "Bennu is a carbonaceous near-Earth asteroid targeted by NASA's OSIRIS-REx mission, which returned a sample from the asteroid rich in organic materials."
  },
  {
    question: "What distinguishes a 'Trojan asteroid' from other types of asteroids?",
    options: ["It shares an orbit with a planet", "It is made entirely of ice", "It orbits between Mars and Jupiter", "It is found in the Kuiper belt"],
    correctAnswer: "It shares an orbit with a planet",
    explanation: "Trojan asteroids share an orbit with a planet, residing in the Lagrange points, either ahead of or behind the planet in its orbital path. Many of Jupiter's Trojans are well-known examples."
  },
  {
    question: "Which asteroid impact is believed to have caused the mass extinction event that wiped out the dinosaurs?",
    options: ["Chicxulub", "Apophis", "Hoba", "Toutatis"],
    correctAnswer: "Chicxulub",
    explanation: "The Chicxulub asteroid impact, about 66 million years ago, is widely believed to have caused the mass extinction event that led to the demise of the dinosaurs and many other species."
  },
  {
    question: "Which asteroid has a large crater named Rheasilvia, created by a massive impact?",
    options: ["Vesta", "Ceres", "Pallas", "Eros"],
    correctAnswer: "Vesta",
    explanation: "Vesta, one of the largest asteroids in the asteroid belt, has a massive crater named Rheasilvia, which is nearly 500 km in diameter, created by a significant impact."
  },
  {
    question: "Which asteroid is known for its binary system, with a small moon orbiting it?",
    options: ["Ida", "Gaspra", "Itokawa", "Toutatis"],
    correctAnswer: "Ida",
    explanation: "Ida, a large asteroid in the asteroid belt, is known for its small moon Dactyl, making it part of a binary asteroid system."
  },
  {
    question: "What is the term for asteroids that pass close to Earth's orbit?",
    options: ["Near-Earth Objects (NEOs)", "Kuiper Belt Objects (KBOs)", "Dwarf planets", "Centaur objects"],
    correctAnswer: "Near-Earth Objects (NEOs)",
    explanation: "Near-Earth Objects (NEOs) are asteroids or comets whose orbits bring them close to Earth's orbit. These objects are closely monitored due to potential impact risks."
  }
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

// Props types for QuizQuestion component
interface QuizQuestionProps {
  question: QuizItem;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  answered: boolean;
  questionNumber: number;
}

function QuizQuestion({
  question,
  onAnswer,
  onNext,
  answered,
  questionNumber
}: QuizQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Question {questionNumber} of 10</h2>
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
                  ? 'bg-[#6F758B]'
                  : 'bg-black'
                : 'bg-[#6F758B ] hover:bg-[#6F758B]'
            } transition-colors duration-300`}
            onClick={() => !answered && onAnswer(option === question.correctAnswer)}
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
            className="mt-4 px-4 py-2 bg-[#BDB76B] hover:bg-[#BDB76B] rounded transition-colors duration-300"
            onClick={onNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

// Props types for Result component
interface ResultProps {
  score: number;
  onRestart: () => void;
}

function Result({ score, onRestart }: ResultProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-2xl mb-4">
        Your score: {score} out of 10
      </p>
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
}

// Main Quiz component
function Quiz() {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false);

  // Shuffling and setting the questions when the component mounts
  useEffect(() => {
    const shuffledQuestions = shuffleArray(QuizData).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  // Handling user's answer and updating the score
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    setAnswered(true);
  };

  // Moving to the next question or showing the result if it's the last question
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

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl p-6 backdrop-blur-xl bg-transparent rounded-lg shadow-xl text-white"
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

// Main component wrapping the Quiz component and adding a background video
export default function AsteroidsQuiz() {
  return (
    <div id="quiz-container" className="relative w-full h-screen">
      <video 
        id="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/Asteroids.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Quiz />
      </div>
    </div>
  );
}


