import React, {useState} from 'react';
import quotes from '../json/quotes.json'
import colors from '../json/colors.json'


const QuoteBox = () => {
    
    const random = Math.floor(Math.random() * quotes.length); 
    const [index, setIndex] = useState(random);

    const randombg = Math.floor(Math.random() * colors.length); 
    const [colorbg, setColorbg] = useState(randombg)


    console.log(quotes.length)
    console.log(colors[randombg].hex)
    

   const changeQuote = () => {
    const newRandom = Math.floor(Math.random() * quotes.length)
    setIndex(newRandom)

    const newRandombg = Math.floor(Math.random() * colors.length)
    setColorbg(newRandombg)



   };

    return (
        <div className='card-container' style={{background: `${colors[colorbg].hex}`}}>
            <div className='quote-card'>
                <div className='text-container'>
                    <i class='bx bxs-quote-left' style={{color: `${colors[colorbg].hex}`}}></i>
                    <p style={{color: `${colors[colorbg].hex}`}}>{quotes[index].quote}</p>
                </div>
                <p className='author' style={{color: `${colors[colorbg].hex}`}}>{quotes[index].author}</p>
                <button className='next-btn' onClick={changeQuote} style={{background: `${colors[colorbg].hex}`}}>
                    <i class='bx bx-play'></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;