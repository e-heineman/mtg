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
    const array = [
      {"object":"card","id":"0005c844-787c-4f0c-8d25-85cec151642b","oracle_id":"53d5d961-d6a3-49b1-b335-2c2b49972008","multiverse_ids":[450637],"tcgplayer_id":170970,"cardmarket_id":361746,"name":"Whiptongue Hydra","lang":"en","released_at":"2018-08-09","uri":"https://api.scryfall.com/cards/0005c844-787c-4f0c-8d25-85cec151642b","scryfall_uri":"https://scryfall.com/card/c18/36/whiptongue-hydra?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://c1.scryfall.com/file/scryfall-cards/small/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235","normal":"https://c1.scryfall.com/file/scryfall-cards/normal/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235","large":"https://c1.scryfall.com/file/scryfall-cards/large/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235","png":"https://c1.scryfall.com/file/scryfall-cards/png/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.png?1592710235","art_crop":"https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235","border_crop":"https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/0/0005c844-787c-4f0c-8d25-85cec151642b.jpg?1592710235"},"mana_cost":"{5}{G}","cmc":6.0,"type_line":"Creature — Lizard Hydra","oracle_text":"Reach\nWhen Whiptongue Hydra enters the battlefield, destroy all creatures with flying. Put a +1/+1 counter on Whiptongue Hydra for each creature destroyed this way.","power":"4","toughness":"4","colors":["G"],"color_identity":["G"],"keywords":["Reach"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","gladiator":"not_legal","pioneer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","brawl":"not_legal","historicbrawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal"},"games":["paper"],"reserved":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"06ce6bc2-85cd-4cca-85b1-8c620d3e0902","set":"c18","set_name":"Commander 2018","set_type":"commander","set_uri":"https://api.scryfall.com/sets/06ce6bc2-85cd-4cca-85b1-8c620d3e0902","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Ac18\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/c18?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/0005c844-787c-4f0c-8d25-85cec151642b/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A53d5d961-d6a3-49b1-b335-2c2b49972008\u0026unique=prints","collector_number":"36","digital":false,"rarity":"rare","flavor_text":"\"Where'd all the birds go?\"\n—Kaldrin, jungle sightseer","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Tomasz Jedruszek","artist_ids":["bba69285-2445-4a4b-a847-59397be972ea"],"illustration_id":"a5a61ad7-5d82-4a71-81f9-1500616ca2b6","border_color":"black","frame":"2015","security_stamp":"oval","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":3793,"prices":{"usd":"4.26","usd_foil":null,"usd_etched":null,"eur":"0.63","eur_foil":null,"tix":null},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=450637","tcgplayer_infinite_articles":"https://infinite.tcgplayer.com/search?contentMode=article\u0026game=magic\u0026partner=scryfall\u0026q=Whiptongue+Hydra\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall","tcgplayer_infinite_decks":"https://infinite.tcgplayer.com/search?contentMode=deck\u0026game=magic\u0026partner=scryfall\u0026q=Whiptongue+Hydra\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall","edhrec":"https://edhrec.com/route/?cc=Whiptongue+Hydra","mtgtop8":"https://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Whiptongue+Hydra"}},
    ];
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
