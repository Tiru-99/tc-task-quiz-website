import React, { useState } from 'react';

import { useEffect } from 'react';

const History = () => {
    const questions = [
        {
          question: 'Who was the first Emperor of the Maurya Dynasty in ancient India?',
          options: ['Chandragupta Maury', 'Ashoka the Great', 'Bindusara', 'Chanakya'],
          correctAnswer: 'Chandragupta Maurya',
        },
        {
          question: 'The Indus Valley Civilization was primarily located in which present-day country?',
          options: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
          correctAnswer: 'Pakistan',
        },
        {
          question: 'Who was the leader of the Indian National Congress during India\'s struggle for independence?',
          options: ['Subhas Chandra Bose', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Mahatma Gandhi'],
          correctAnswer: 'Mahatma Gandhi',
        },
        {
          question: 'The Battle of Plassey in 1757 is considered a turning point in Indian history. It was fought between the British East India Company and which ruler?',
          options: ['Tipu Sultan', 'Shivaji', 'Siraj-ud-Daulah', 'Rana Pratap'],
          correctAnswer: 'Siraj-ud-Daulah',
        },
        {
          question: 'Who was the first woman Prime Minister of India?',
          options: ['Indira Gandhi', 'Sonia Gandhi', 'Margaret Thatcher', 'Golda Meir'],
          correctAnswer: 'Indira Gandhi',
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

export default History;
