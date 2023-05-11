import './App.css';
import React, { useState } from 'react';

type Quote = {
  content: string;
  author: string;
}

const App: React.FC = () => {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState<Quote>({
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  });

  // Function to generate a new quote by fetching data from the API
  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  // Function to copy the quote to the clipboard
  const copy = () => {
    navigator.clipboard.writeText(`${quote.author} once said: ${quote.content}`);
    alert('Copied!');
  };



  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  );
};

export default App;
