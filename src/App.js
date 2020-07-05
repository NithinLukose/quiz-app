import React,{useState} from 'react';

import TakeQuizForm from './component/takeQuizForm'
import './App.css';

function App() {

  const [category,setCategory] = useState('Any Category')
  const [difficulty,setDifficulty] = useState('Any Difficulty')

  const handleCategoryChange = (e) => {

    setCategory(e.target.value)

  }
  const handleDifficultyChange = (e) => {

    setDifficulty(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("helo")
  }
  return (
    <TakeQuizForm category={category} handleCategoryChange={handleCategoryChange} difficulty={difficulty} handleDifficultyChange={handleDifficultyChange} handleSubmit={handleSubmit} />
  );
}

export default App;
