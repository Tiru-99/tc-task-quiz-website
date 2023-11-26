import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Quiz from './Quiz';
import Instructions from './Instructions';
import Card from './Card';
import Science from './topics/Science';
import Economics from './topics/Economics';
import Health from './topics/Health';
import Geography from './topics/Geography';
import Food from './topics/Food';
import History from './topics/History';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element = {<Mainpage/>}/>
       <Route path='/mainpage' element = {<Mainpage/>}/>
       <Route path='/quiz' element = {<Quiz/>}/>
       <Route path='/instructions' element={<Instructions/>}/>
       <Route path='/card' element={<Card/>}/>
       <Route path='/st' element={<Science/>}/>
       <Route path='/eco' element={<Economics/>}/>
       <Route path='/fitness' element={<Health/>}/>
       <Route path='/geo' element={<Geography/>}/>
       <Route path='/history' element={<History/>}/>
       <Route path='/foodanddrinks' element={<Food/>}/>
   
      
    </Routes>
  </BrowserRouter>
  
  , document.getElementById('root'));

