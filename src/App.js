import React,{useState} from 'react';
import Header from './component/header'
import Category from './component/category'
import Difficulty from './component/difficulty'
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
  return (
    <div className="flex-element">

      
      <Header text="Take Quiz"/>
      <br/>
      <br/>
      <br/>
      <Category category={category} onChange={handleCategoryChange} />
      <Difficulty difficulty={difficulty} onChange={handleDifficultyChange} />

    </div>
  );
}

export default App;
