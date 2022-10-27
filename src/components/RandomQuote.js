import React from "react";

function RandomQuote(props){

    const { quotes } = props

    const singleRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // console.log(singleRandomQuote.quote)
    // console.log(quotes[0])

    return(
        <div>
            <div className="header">
            <h1 style={{fontSize: "30px", margin: "10px", color: 'white' }} >Daily Quote</h1>
        </div>
            <h2>{singleRandomQuote?.quote}</h2>
            <h3>{singleRandomQuote?.author}</h3>
        </div>
    )
}

export default RandomQuote;