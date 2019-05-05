import React from 'react';
import './App.css';
import randomQuote from './randomQuote.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>"{randomQuote()}"</p>
      </header>
    </div>
  );
}

export default App;
