import { useState } from 'react';

const RecipeChoices = ({ choices, label, handleChange, checked }) => {
    return (
        <div className="radio-buttons">
            {choices &&
                choices.map((choice) => (
                        <li key={choice}>
                        <input
                            id={choice}
                            value={choice}
                            type="radio"
                            name={label}       
                            onChange={handleChange}
                            checked={checked == choice}
                            />
                        {choice}
                    </li>    
                ))}
        </div>
    )
}

export default RecipeChoices;