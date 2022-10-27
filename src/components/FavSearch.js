import React from "react";

function FavSearch(props){
    const {favSearchTerm} = props
    return(
        <div>
            <input type="search" onChange={(e)=> favSearchTerm(e.target.value)}/>
        </div>
    )
}

export default FavSearch;