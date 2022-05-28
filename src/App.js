import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddCard from './components/AddCard';
import Collection from "./components/Collection";
import FindCard from './components/FindCard';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer)
    }

    getCards()
  }, [])

  const fetchCards = async () => {
    const url = 'https://api.scryfall.com/cards/khm/24';
    const res = await fetch(url);
    const data = await res.json();
    const array = [];
    array.push(data);
    // console.log(array);
    return array;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={
            <>
                Personal MTG Card App. Under Development.
            </>
          } />
          <Route path='/add' element={<AddCard />} />
          <Route path='/collection' element={<Collection cards={cards}/>} />
          <Route path='/find' element={<FindCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
