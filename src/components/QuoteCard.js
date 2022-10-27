import React from "react";

function QuotesCard(props){
    const {quote, setAFavoriteQuote} = props
    return(
        <div>
            <h3>{quote.quote}</h3>
            <p>{quote.author}</p>
            <button onClick={(e)=>setAFavoriteQuote(quote)}>sakdln</button>
        </div>
    )
}

export default QuotesCard;