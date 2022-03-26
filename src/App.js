// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddCard from './components/AddCard';
import Cards from "./components/Card";
import FindCard from './components/FindCard';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
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
          <Route path='/collection' element={<Cards />} />
          <Route path='/find' element={<FindCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
