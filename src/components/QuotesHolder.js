import React from "react";
import QuotesCard from "./QuoteCard";
import Search from "./Search";
import Sort from "./Sort"

function QuotesHolder(props){
    const {quotes, setAFavoriteQuote, searchTerm, sortedQuotes} = props

    const renderQuotes = quotes.map((quote)=>
    <QuotesCard 
    quote={quote}
    key={quote.id}
    setAFavoriteQuote={setAFavoriteQuote}
    />)
    return(
        <div>
            <h2>Quotes</h2>
            <Sort sortedQuotes={sortedQuotes}/>
            <Search searchTerm={searchTerm}/>
            {renderQuotes}
        </div>
    )
}

export default QuotesHolder;