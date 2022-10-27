import React from "react";
import QuotesPage from "./QuotesPage"
import Header from "./Header";
import Navbar from "../Navbar"
import Favorites from "../Favorites";
import Quotes from "../Quotes";
import Home from "../Home";
import {  Route, Routes } from "react-router-dom";
import Search from "./Search";
import { createContext } from "react";
// import Clock from "../components/Clock"

export const ThemeContext = createContext(null);

function App() {

  return (

      <div className="App" >
      <Navbar />
    <Search/>
      <div className="container">
        <Routes>
          <Route path="/"element={ <Home />} />
          <Route path="/favorites"element={ <Favorites />} />
          <Route path="/quotes"element={ <Quotes />} />
        </Routes>
      </div>
      <Header />
      {/* <Clock /> */}
      <QuotesPage />
    </div>

  );
}

export default App;




