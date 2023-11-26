import React from 'react';
import './instructions.css';
import Card from './Card';import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Instructions = ()=>{
  const confirmQuizStart = (subject) => {
    const isConfirmed = window.confirm(`Are you sure you want to attempt the ${subject} quiz?`);
    
    if (isConfirmed) {
      // If the user clicks "OK" in the confirmation dialog, navigate to the quiz page
      window.location.href = `/${subject.toLowerCase()}`;
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);
    return(
        <>  
    <div className='imp-navbar' data-aos ="fade-in" data-aos-delay = "300" >
        <nav className='navbar'>
          <div className='Quizzy'>
            <h1>Tiru </h1>
          </div>

          <div className='nav-elements'>
          <ul>
            <li><a href='/mainpage' className='nava'>Home</a></li>
            <li><a href='/aboutus' className='nava'>About Us</a></li>
            </ul>

           
          </div>
          

         
        </nav>
      </div>

        <div className='main-heading' data-aos ="fade-in" data-aos-delay="500">
          <div className='heading-img' data-aos ="fade-in" data-aos-delay="500">
            <img src='instruction.png' alt='instruction icon'></img>
          </div>
           <div className='heading' data-aos ="fade-in" data-aos-delay="500">
            <h1> Instructions </h1></div></div>
            <div className='underline2' data-aos ="fade-in" data-aos-delay="500">

               </div>

            <div className='list-inst' data-aos ="fade-in" data-aos-delay="500">
                
                    <div> 1] The test will have five questions related to the topic you choose.</div>
                    <div> 2] Once you click on the option button , your answer will be submitted and evaluated</div>
                    <div> 3] If you try to reload or undo during the test , then you will lose all your progress</div>
                
            </div>


            <div className='test-type'>
               <h1>Choose a subject for the test</h1>
               </div>
             
               <div className='card-comp'>
        <a href='/quiz' onClick={() => confirmQuizStart('General Knowledge')} data-aos ="fade-right" data-aos-delay="500" data-aos-once="true">
          <Card imgsrc="book.png" subject="General Knowledge" />
        </a>

        <a href='/st' onClick={() => confirmQuizStart('Science & Technology')} data-aos ="fade-right" data-aos-delay="700" data-aos-once="true">
          <Card imgsrc="innovation.png" subject="Science & Technology" />
        </a>

        <a href='/eco' onClick={() => confirmQuizStart('Economics')} data-aos ="fade-right" data-aos-delay="900" data-aos-once="true">
          <Card imgsrc="economic.png" subject="Economics" />
        </a>

        <a href='/fitness' onClick={() => confirmQuizStart('Health & Fitness')} data-aos ="fade-right" data-aos-delay="1100" data-aos-once="true">
          <Card imgsrc="dumbbell.png" subject="Health & Fitness" />
        </a>
      </div>

      <div className='card-comp'>
        <a href='/geo' onClick={() => confirmQuizStart('Geography')} data-aos ="fade-right" data-aos-delay="1300" data-aos-once="true">
          <Card imgsrc="globe.png" subject="Geography" />
        </a>

        <a href='/history' onClick={() => confirmQuizStart('Indian History')} data-aos ="fade-right" data-aos-delay="1500" data-aos-once="true">
          <Card imgsrc="history.png" subject="Indian History" />
        </a>

        <a href='/foodanddrinks' onClick={() => confirmQuizStart('Food & Drinks')} data-aos ="fade-right" data-aos-delay="1700" data-aos-once="true">
          <Card imgsrc="drink.png" subject="Food & Drinks" />
        </a>
      </div>
           
        </>
    );
}
export default Instructions; 