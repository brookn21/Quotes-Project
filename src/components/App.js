import React, { useState, useEffect} from "react";
import RandomQuote from "../components/RandomQuote"
import Navbar from "../Navbar"
import QuotesHolder from "../components/QuotesHolder";
import FavoriteQuotes from "../components/FavoriteQuotes";
import {  Route, Routes } from "react-router-dom";
import { createContext } from "react";
import AddQuoteForm from './AddQuoteForm'
// import Clock from "../components/Clock"

export const ThemeContext = createContext(null);

function App() {

  const url = " http://localhost:3000/quotes"

  const [quotes, setQuotes] = useState([])
  const [searchResult, setSearchResult] = useState("")
  const [ category, setCategory] = useState("")
  const [ favQuotes, setFavQuotes] = useState([])
  const [ clicked, setClicked] = useState(true)

  useEffect(()=> fetchQuotes,[])

  function fetchQuotes(){
      fetch(url)
      .then(resp => resp.json())
      .then(setQuotes)
  }

  function searchTerm(term){
      setSearchResult(term)
  }

  function checkClicked(){
    setClicked(!clicked)
  }

  function addForm(form){
      const newObj ={
          method: "POST",
          headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(form)
        }
        fetch(url,newObj)
        .then( resp => resp.json())
        .then(newQuote => setQuotes([...quotes,newQuote]))
  }

  function sortedQuotes(quote){
      setCategory(quote)
  }

  const filteredQuotes = quotes.filter((quote)=> quote.author.toUpperCase().includes(searchResult.toUpperCase()))

  
  let quotesSorted = [] 
  function createSortedArray(){
      if(category === "All"){
          quotesSorted = [...filteredQuotes]
      }
      else{
          quotesSorted = filteredQuotes.filter((quote)=> quote.category.toUpperCase().includes(category.toUpperCase()))
      }
  }

  createSortedArray()

  function setAFavoriteQuote(quoteExample){
  if( favQuotes.includes(quoteExample)){
      setFavQuotes(favQuotes.filter((quote) => quote !== quoteExample))
    }
  else{
  setFavQuotes([...favQuotes, quoteExample])
  }
  }

  return (

      <div className="App" >
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/"element={ <RandomQuote quotes ={quotes}/>} />
          {/* <Route path="/favorites"element={ <Favorites />} /> */}
          <Route path="/quotes"element={ <QuotesHolder 
          quotes={quotesSorted}
          setAFavoriteQuote={setAFavoriteQuote}
          searchTerm={searchTerm}
          sortedQuotes={sortedQuotes}
          checkClicked={checkClicked}
          clicked={clicked}/> } />
          <Route path="/favorites"element={ <FavoriteQuotes 
          favQuotes ={favQuotes} 
          setAFavoriteQuote={setAFavoriteQuote}
          searchResult={searchResult}
          category={category}
          sortedQuotes={sortedQuotes}
          searchTerm={searchTerm}
          />
        } />
          <Route path="/addQuote"element={ <AddQuoteForm addForm={addForm}/>} />
        </Routes>
      </div>
      {/* <Clock /> */}
    </div>

  );
}

export default App;