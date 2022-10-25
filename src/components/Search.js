import React from "react";

function Search(props){
    const {searchTerm} = props
    return(
        <div>
            <input type="search" onChange={(e)=> searchTerm(e.target.value)}/>
        </div>
    )
}

export default Search;