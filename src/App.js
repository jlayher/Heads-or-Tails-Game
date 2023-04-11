import './app.css';

import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Outcome from './components/Outcome/Outcome';

function App() {
  return (
    <>
      <div className='app_container'>
      <Header />
        <Body />

      <Footer />
      </div>
    </>
  );
}

export default App;



// players get to bet on the coin flip.
// initial bet value is 0.  
// Alternate which player gets to call heads or tails before flipping
//on click of the Flip button, flip the coin
// calculate the coin flip value
// see which player won, and apply the bet value to the players
  // the loser should lose the amount that was bet
  // winner should gain the amount that was bet
  // display calculated value for each player
    //if player has a positive score, display "Player X is owed $X"
// continue to track players bets 


//display a log of all flips and bets on the side of the screen
//show coin flip with image on side of screen

// <div className="main">
        
// <h1 className="title">Coin Flip!</h1>
// <button type='button' className="btn">Flip</button>

// </div>


// <div className="bet_container">
// Make a bet!
// {/* put a form here for bets */}
// </div>