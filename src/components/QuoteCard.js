import React from "react";

function QuotesCard(props){
    const {quote, setAFavoriteQuote, checkClicked, clicked} = props
    return(
        <div>
            <h3>{quote.quote}</h3>
            <p>-{quote.author}</p>
            <button onClick={(e)=>setAFavoriteQuote(quote)}>like</button>
        </div>
    )
}

export default QuotesCard;