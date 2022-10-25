import React from "react"

function Sort(props){
    const {sortedQuotes} = props
    return(
        <select onChange={(e)=> sortedQuotes(e.target.value)}>
            <option value="All">Select a Category</option>
            <option value="inspiration">Inspiration</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            <option value="art">Art</option>
        </select>
    )
}

export default Sort;