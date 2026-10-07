import './App.css'
import BaristaForm from './components/BaristaForm';

function App () {
  return (
   
    <div className="title-container">
      <div className="title-row">
          <img src="/coffee-bag.png" alt="Coffee bag" className="title-logo"    />   
        <h1 className="title">On My Grind</h1>
      </div>
        <p>Welcome to the Barista App!</p>
    
       
    <BaristaForm />
   </div>

  )
}

export default App;