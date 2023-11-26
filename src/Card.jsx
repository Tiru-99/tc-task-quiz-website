import React from 'react';
import './card.css';

const Card = (props)=>{
    return(
        <>
            <div className='Card'>
                <img src={props.imgsrc}></img>
                <h3>{props.subject}</h3>
            </div>
        </>
    );
}
export default Card