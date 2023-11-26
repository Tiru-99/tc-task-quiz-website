import React, { useState } from 'react';

const Quuiz = () => {
  const questions = [
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
      correctAnswer: 'New Delhi',
    },
    {
      question: 'Which river is the longest in the world?',
      options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
      correctAnswer: 'Nile',
    },
    {
      question:'What is the capital of France?',
      options: ['London','Paris','Berlin','Madrid'],
      correctAnswer: 'London',
    }
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      <div className='options'>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button
              disabled={userAnswer !== null}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      </div>
      {userAnswer !== null && (
        <>
          <p>{userAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Incorrect!'}</p>
          <button onClick={handleNextQuestion}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </>
      )}
      <p>Score: {score}</p>
    </div>
  );
};

export default Quuiz;