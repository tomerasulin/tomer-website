import { useState } from 'react';

const quotes = [
  `"Security is always excessive until it's not enough." – Robbie Sinclair`,
];

const Cloud = () => {
  const [quote, setQuote] = useState();
  const generator = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  setTimeout(() => {
    generator();
  }, 10000);

  return (
    <div className='cloud'>
      <div className='cloud__circle'></div>
      <div className='cloud__circle'>
        <p className='cloud__text'>{quote}</p>
      </div>
      <div className='cloud__circle'></div>
      <div className='cloud__base'></div>
    </div>
  );
};

export default Cloud;
