import React from "react";

function QuotesCard(props){
    const {quote} = props
    return(
        <div>
            <h3>{quote.quote}</h3>
            <p>{quote.author}</p>
        </div>
    )
}

export default QuotesCard;