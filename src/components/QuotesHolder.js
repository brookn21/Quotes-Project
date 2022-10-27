import React from "react";
import QuotesCard from "./QuoteCard";

function QoutesHolder(props){
    const {quotes, setAFavoriteQuote} = props

    const renderQuotes = quotes.map((quote)=>
    <QuotesCard 
    quote={quote}
    key={quote.id}
    setAFavoriteQuote={setAFavoriteQuote}
    />)
    return(
        <div>
            {renderQuotes}
        </div>
    )
}

export default QuotesHolder;