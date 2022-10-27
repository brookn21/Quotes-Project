import React, {useState} from 'react'
import FavSort from "./FavSort"
import QuotesCard from './QuoteCard'
import FavSearch from "./FavSearch"


function FavoriteQuote(props){

    const { favQuotes,setAFavoriteQuote } = props

    const [favSearchResult, setFavSearchResult] = useState("")
    const [ favCategory, setFavCategory] = useState("")

    function favSearchTerm(term){
        setFavSearchResult(term)
    }

    function sortedFavQuotes(quote){
        setFavCategory(quote)
    }

    const filteredFavQuotes = favQuotes.filter((quote)=> quote.author.toUpperCase().includes(favSearchResult.toUpperCase()))

  
  let quotesSorted = [] 
  function createSortedArray(){
      if(favCategory === "All"){
          quotesSorted = [...filteredFavQuotes]
      }
      else{
          quotesSorted = filteredFavQuotes.filter((quote)=> quote.category.toUpperCase().includes(favCategory.toUpperCase()))
      }
  }

  createSortedArray()

    const renderFavQuote = quotesSorted.map((quote)=>
    <QuotesCard 
    quote={quote}
    key={quote.id}
    setAFavoriteQuote={setAFavoriteQuote}
    />)
    return(
        <div>   
            <FavSearch favSearchTerm={favSearchTerm}/>
            <FavSort sortedFavQuotes={sortedFavQuotes}/>
            {renderFavQuote}
        </div>
    )
}

export default FavoriteQuote;