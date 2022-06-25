import React from 'react';
import quote from './quotes.json';
import { useState } from 'react'
import Img from './Img';

const colors = ['red', 'blue', 'green', 'gray', 'yellow', 'brown']

const QuoteBox = () => {
    const random = Math.floor(Math.random() * quote.length);
    const [ index, setIndex ] = useState(random);
    
  
    const changePhrase = () => {
      const random = Math.floor(Math.random() * quote.length);
      setIndex(random);
  
    }
  
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex]
  
    document.body.style = `background: ${color}`;
    return (
        <div className="card" style={{color:color}}>
        <h4><i class="fa-solid fa-quote-left fa-xl"></i> {quote[index].quote}</h4>
        <h3>{quote[index].author}</h3>
        <Img />
        <button onClick={changePhrase} className="button-c" style={{background:color}}><i class="fa-solid fa-circle-arrow-right"></i></button>
      </div>
    );
};

export default QuoteBox;