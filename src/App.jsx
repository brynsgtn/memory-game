import Header from './components/Header'
import './App.css'
import CardsContainer from './components/CardsContainer'
import players from "../playersinfo";
import { useEffect, useState } from "react";
import Footer from './components/Footer';

function App() {

  const [random, setRandom] = useState(players);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);


  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  },[currentScore])

  const clickHandler = (e, id) => {

    // Check if the clicked ID is already in the selectedIds array
    if (selectedIds.includes(id)) {
      // If it's a duplicate click, reset selectedIds and currentScore
      setSelectedIds([]);
      setCurrentScore(0);
    } else {
      // If it's a new click, update selectedIds and increase currentScore
      setSelectedIds([...selectedIds, id]);
      setCurrentScore(currentScore + 1);
    }

    // Shuffle the players array for a new order
    let randomArray = players
                    .map((a) => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value);

    setRandom(randomArray);
  };

  return (
    <>
      <div className='container'>
        <Header 
                currentScore={currentScore}
                highScore={highScore}
        />
        <CardsContainer 
                        players={random}
                        onClick={clickHandler}
        />       
        
      </div>
      <Footer /> 
    </>
  )
}

export default App
