import React from 'react'
import Header from './header'
import Category from './category'
import Difficulty from './difficulty'

const TakeQuizForm = ({category,handleCategoryChange,difficulty,handleDifficultyChange,handleSubmit}) => {

    return(

        <div className="flex-element">
        
            <Header text="Take Quiz"/>
            
            <form onSubmit={handleSubmit}>
                <Category category={category} onChange={handleCategoryChange} />
                <Difficulty difficulty={difficulty} onChange={handleDifficultyChange} />
                <div className="take-quiz">
                <input type="submit" value="Take Quiz" />
                </div>
                
            </form>

        </div>

    )

}

export default TakeQuizForm