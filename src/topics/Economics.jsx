import React, { useState } from 'react';

import { useEffect } from 'react';

const Economics = () => {
    const questions = [
        {
          question: 'What is the primary goal of monetary policy?',
          options: ['Stable prices and maximum employment', 'Maximizing profits for banks', 'Reducing government debt', 'Expanding international trade'],
          correctAnswer: 'Stable prices and maximum employment',
        },
        {
          question: 'What does GDP stand for?',
          options: ['Global Development Process', 'Gross Domestic Product', 'General Distribution Process', 'Government Debt Percentage'],
          correctAnswer: 'Gross Domestic Product',
        },
        {
          question: 'In economics, what does the term "inflation" refer to?',
          options: ['Decrease in the general price level', 'Increase in the money supply', 'Increase in the general price level', 'Stagnation in economic growth'],
          correctAnswer: 'Increase in the general price level',
        },
        {
          question: 'What is the economic term for the total value of goods and services produced within a country in a specific time period?',
          options: ['Trade balance', 'Budget deficit', 'Trade surplus', 'Gross Domestic Product '],
          correctAnswer: 'Gross Domestic Product',
        },
        {
          question: 'In supply and demand, what does an increase in demand lead to?',
          options: ['Decrease in price', 'Increase in price', 'No change in price', 'Decrease in quantity'],
          correctAnswer: 'Increase in price',
        },
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

export default Economics;

