import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Note from './Note';
import './App.css';

interface NoteProps {
  title: string;
  content: string;
}

function App() {
  const [count, setCount] = useState(0);
  function plus(){
    setCount(count+1);
  }
  useEffect(() => {
    setInterval(plus, 1000);
  }, [count]);
  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;
