import React from 'react'

const Difficulty = ({category,onChange}) => {

    return(

        <div className='category'>
            <label>
                Select Difficulty
            <select value = {category} onChange={onChange} className="select"> 
            
                
                <option  value="Any Category">Any Category</option>
                

            </select>
            </label>
        </div>

    )

}

export default Difficulty