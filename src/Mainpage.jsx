import React from 'react';
import './mainpage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Mainpage = () => {
  const Knowledge = <div className='knowledge'><h1>Knowledge</h1></div>;

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className='imp-navbar' data-aos="fade-in">
        <nav className='navbar'>
          <div className='Quizzy'>
            <h1>Tiru </h1>
          </div>

          <div className='nav-elements'>
            <ul>
              <li><a href='/' className='nava'>Home</a></li>
              <li><a href='https://tiru-99.github.io/portfolio/' className='nava'>About Us</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='hello-user' data-aos="fade-up" data-aos-delay="500">
        <h1>Hello There!</h1>
      </div>

      <div className='underline' data-aos='fade-in' data-aos-delay="1300"></div>

      <div className='main-info'>
        <div className='quiz-image' data-aos="fade-right">
          <img src='Knowledge.gif' alt='Knowledge GIF' />
        </div>

        <div className='quiz-tagline' data-aos="fade-in">
          <h1>Test your {Knowledge} - are you well versed enough?</h1>
        </div>
      </div>

      <div className='take-quiz-btn' style={{ marginBottom: '20px' }}>
        <button>
          <span className="shadow"></span>
          <span className="edge"></span>
          <a href='/instructions'><span className="front text"> Take The Quiz </span></a>
        </button>
      </div>
    </>
  );
}

export default Mainpage;
