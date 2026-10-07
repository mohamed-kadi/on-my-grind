import { useState } from 'react';
import RecipeChoices from './RecipeChoices';
import drinks from './drinks.json'

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        temperature: '',
        milk: '',
        syrup: '',
        blended: ''
    })
    
    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [temperatureCorrect, setTemperatureCorrect] = useState('');
    const [milkCorrect, setMilkCorrect] = useState('');
    const [syrupCorrect, setSyrupCorrect] = useState('');
    const [blendedCorrect, setBlendedCorrect] = useState('');

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onCheckAnswer = () => {
        if (inputs.temperature === trueRecipe.temp)
            setTemperatureCorrect("correct");
        else 
            setTemperatureCorrect("wrong")

        if (inputs.milk === trueRecipe.milk)
            setMilkCorrect("correct");
        else 
            setMilkCorrect("wrong")
        
        if (inputs.syrup === trueRecipe.syrup)
            setSyrupCorrect("correct");
        else 
            setSyrupCorrect("wrong")
        
        if (inputs.blended === trueRecipe.blended)
            setBlendedCorrect("correct");
        else 
            setBlendedCorrect("wrong")

    }

    const getNextDrink = () => {
        const randomDrinkIndex = Math.floor(Math.random() * drinks.drinks.length);
        const randomDrink = drinks.drinks[randomDrinkIndex];

        setCurrentDrink(randomDrink.name);
        setTrueRecipe(randomDrink.ingredients);
    }

    const onNewDrink = () => {
        setInputs({
            temperature: '',
            milk: '',
            syrup: '',
            blended: ''
        });

        setTemperatureCorrect('');
        setMilkCorrect('');
        setSyrupCorrect('');
        setBlendedCorrect('');

        getNextDrink();
    }

    const handleChange = (e) => {
        setInputs({
            ...inputs, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2 className="order-title">Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="drink-name">{currentDrink}</h2>
                <button className="button newdrink" onClick={onNewDrink}>New Drink</button>
            </div>

            <form className="container">
                <div className="mini-container">
                    <h3 className="mini-header">Temperature</h3>
                    <div className={`answer-space ${temperatureCorrect}`}>
                        {inputs.temperature}
                    </div>
                    <RecipeChoices
                        choices={ingredients.temperature}
                        label="temperature"
                        handleChange={handleChange}
                        checked={inputs["temperature"]}
                    />

                </div>
                
                <div className="mini-container">
                    <h3 className="mini-header">Syrup</h3>
                    
                    <div className={`answer-space ${syrupCorrect}`}>
                    {inputs.syrup}
                    </div>
                    <RecipeChoices
                        choices={ingredients.syrup}
                        label="syrup"
                        handleChange={handleChange}
                        checked={inputs.syrup}
                    />
                </div>
                <div className="mini-container">
                    <h3 className="mini-header">Milk</h3>
                    <div className={`answer-space ${milkCorrect}`}>
                        {inputs.milk}
                    </div>
                    <RecipeChoices 
                        choices={ingredients.milk}
                        label="milk"
                        handleChange={handleChange}
                        checked={inputs.milk}
                    />
                </div>
                <div className="mini-container">
                    <h3 className="mini-header">Blended</h3>
                    <div className={`answer-space ${blendedCorrect}`}>
                        {inputs.blended}
                    </div>
                    <RecipeChoices 
                        choices={ingredients.blended}
                        label="blended"
                        handleChange={handleChange}
                        checked={inputs.blended}
                    />
                </div>

            </form>
            <button className="button check-answer" onClick={onCheckAnswer}>
                Check Answer
            </button>

        </div>
    )
}

export default BaristaForm;