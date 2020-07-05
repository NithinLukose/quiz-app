import React from 'react'

const Difficulty = ({category,onChange}) => {

    return(

        <div className='category'>
            <label>
                Select Category
            <select value = {category} onChange={onChange} className="select"> 
            
                
                <option value="Any Category">Any Category</option>
                

            </select>
            </label>
        </div>

    )

}

export default Difficulty