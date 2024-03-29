import { useState } from 'react';

const quotes = [
  `"Security is always excessive until it's not enough." – Robbie Sinclair`,
  `"One of my most productive days was throwing away 1,000 lines of code." - Ken Thompson `,
  `"Any app that can be written in JavaScript will eventually be written in JavaScript." – Atwood's Law`,
  `“There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.” ― Bjarne Stroustrup`,
  `"Our job as game developers is to put ourselves in the player's shoes. We try to see what they're seeing and support what we think they might think." – Shigeru Miyamoto`,
  `“Engaged in the creative process we feel more alive than ever, because we are making something and not merely consuming, masters of the small reality we create. In doing this work, we are in fact creating ourselves.” —Robert Greene`,
  `“We can only see a short distance ahead, but we can see plenty there that needs to be done.” – Alan Turing`,
];

const Cloud = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const generator = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  setTimeout(() => {
    generator();
  }, 8000);

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
