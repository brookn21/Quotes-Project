import React from "react";

function RandomQuote(props){

    const { quotes } = props

    const singleRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // console.log(singleRandomQuote.quote)
    // console.log(quotes[0])

    return(
        <div>
            <h2>{singleRandomQuote?.quote}</h2>
            <h3>{singleRandomQuote?.author}</h3>
        </div>
    )
}

export default RandomQuote;