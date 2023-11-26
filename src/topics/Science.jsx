import React, { useState } from 'react';

import { useEffect } from 'react';

const Science = () => {
  const questions = [
    {
      question: 'What is the chemical symbol for Water?',
      options: ['HO', 'HCL', 'BR', 'H2O'],
      correctAnswer: 'H2O',
    },
    {
      question: 'What is the unit of Electrical Resistance?',
      options: ['Ohm', 'Ampere', 'Volt', 'Watt'],
      correctAnswer: 'Ohm',
    },
    {
      question: 'Who is known as father of Modern Physics?',
      options: ['Isaac Newton', 'Gallileo Gallili', 'Nikola Tesla', 'Albert Einstein'],
      correctAnswer: 'Albert Einstein',
    },
    {
      question: 'Which planet is known as the Red-Planet?',
      options: ['Mars', 'Venus', 'Uranus', 'Neptune'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What does CPU stands with context of computers?',
      options: ['Central Processing Unit', 'Control Power Unit ', 'Computer Processing Unit ', 'Central Printed Unit'],
      correctAnswer: 'Central Processing Unit',
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scoreMessage, setScoreMessage] = useState('');

  const handleAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer(null);
    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
      // Set score message based on the user's score
      setScoreMessage(getScoreMessage(score));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getScoreMessage = (userScore) => {
    if (userScore === 5) {
      return 'Remark : Excellent!';
    } else if (userScore === 4) {
      return 'Remark : Great!';
    } else if (userScore === 3) {
      return 'Remark : Average';
    } else {
      return 'Remark : Poor';
    }
  };

  const confirmUnload = (event) => {
    const message = "Are you sure you want to leave? All your progress will be lost, and you will have to re-attempt the test.";
    event.returnValue = message;
    return message;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', confirmUnload);

    return () => {
      window.removeEventListener('beforeunload', confirmUnload);
    };
  }, []);

  return (
    <div className='main-quiz-box'>
      <h1 className='questions'>{questions[currentQuestion].question}</h1>
      <div className='options'>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className='ind-options'>
            <input
              type="radio"
              id={`option${index}`}
              name="quizOption"
              value={option}
              checked={userAnswer === option}
              disabled={userAnswer !== null}
              onChange={() => handleAnswer(option)}
            />
            <label htmlFor={`option${index}`} className='label'>
              {option}
            </label>
          </div>
        ))}
      </div>
      {userAnswer !== null && (
        <>
          <p style={{ color: userAnswer === questions[currentQuestion].correctAnswer ? 'green' : 'red' }} className='corr-incorr'>
            {userAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Incorrect!'}
          </p>
          <button onClick={handleNextQuestion} className='next-ques-btn'>
            {currentQuestion === questions.length - 1 ? 'Check Result' : 'Next Question'}
          </button>
        </>
      )}
      {showScore && (
        <>
          <p className='score-display'>Your Score: {score} out of {questions.length}</p>
          <p className='score-message'>{scoreMessage}</p>
          <div className='goback'>
            <a href='/mainpage'><button>Go Back</button></a>
          </div>
        </>
      )}
    </div>
  );
};

export default Science;


