
const RecipeChoices = ({ choices, label, handleChange, checked }) => {
    return (
        <>
            <input className="textbox"
            type="text"
            name={label}  
            placeholder="Guess the ingredient.."    
            onChange={handleChange}
            value={checked}
            />
            <div className="radio-buttons">
               {choices &&
                choices.map((choice) => (
                        <li key={choice}>
                          {choice}
                        </li>    
                ))}
            </div>
        </>
    )
}

export default RecipeChoices;