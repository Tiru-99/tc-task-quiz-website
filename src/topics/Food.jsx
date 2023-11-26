import React, { useState } from 'react';

import { useEffect } from 'react';

const Food = () => {
    const questions = [
        {
          question: 'What is the main ingredient in guacamole?',
          options: ['Tomato', 'Avocado', 'Onion', 'Cilantro'],
          correctAnswer: 'Avocado',
        },
        {
          question: 'Which type of pasta is shaped like small rice grains?',
          options: ['Fusilli', 'Orzo', 'Penne', 'Farfalle'],
          correctAnswer: 'Orzo',
        },
        {
          question: 'What is the primary ingredient in hummus?',
          options: ['Chickpeas', 'Lentils', 'Black beans', 'Kidney beans'],
          correctAnswer: 'Chickpeas',
        },
        {
          question: 'Which fruit is known as the "king of fruits" and has a strong odor?',
          options: ['Mango', 'Banana', 'Durian', 'Pineapple'],
          correctAnswer: 'Mango',
        },
        {
          question: 'In which country did the sandwich originate?',
          options: ['France', 'Italy', 'England', 'United States'],
          correctAnswer: 'England',
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

export default Food;
