import React, { useState } from 'react';

import { useEffect } from 'react';

const Health = () => {

  const bodyStyle = {
    backgroundImage: 'url("food background.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust the height as needed
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    display: 'flex',
    flexDirection: 'column', // Optional: Set the layout direction
    alignItems: 'center', // Optional: Center content horizontally
    justifyContent: 'center', // Optional: Center content vertically
  };
    const questions = [
        {
          question: 'What is the recommended daily water intake for adults?',
          options: ['2 liters', '3 liters', '4 liters', '8 glasses'],
          correctAnswer: '8 glasses',
        },
        {
          question: 'Which nutrient is the bodys primary source of energy?',
          options: ['Protein', 'Carbohydrates', 'Fat', 'Vitamins'],
          correctAnswer: 'Carbohydrates',
        },
        {
          question: 'What is the minimum recommended duration of cardiovascular exercise per week for adults?',
          options: ['30 minutes', '45 minutes', '60 minutes', '90 minutes'],
          correctAnswer: '45 minutes',
        },
        {
          question: 'Which activity helps improve flexibility?',
          options: ['Running', 'Weightlifting', 'Yoga', 'Swimming'],
          correctAnswer: 'Yoga',
        },
        {
          question: 'What is the primary benefit of getting enough sleep?',
          options: ['Increased stress', 'Improved memory', 'Weakened immune system', 'Enhanced overall well-being'],
          correctAnswer: 'Enhanced overall well-being',
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
    <div className='main-quiz-box' style={bodyStyle}>
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

export default Health;