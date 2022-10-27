import React from "react";
import QuotesCard from "./QuoteCard";

function QuotesHolder(props){
    const {quotes} = props

    const renderQuotes = quotes.map((quote)=>
    <QuotesCard 
    quote={quote}
    key={quote.id}
    />)
    return(
        <div>
            {renderQuotes}
        </div>
    )
}

export default QuotesHolder;