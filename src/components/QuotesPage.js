import React, { useEffect, useState } from "react";
import QoutesHolder from "./QuotesHolder";
import Search from "./Search";
import AddQuoteForm from "./AddQuoteForm";
import Sort from "./Sort"

function QuotesPage(){

    const url = " http://localhost:3000/quotes"

    const [quotes, setQuotes] = useState([])
    const [searchResult, setSearchResult] = useState("")
    useEffect(()=> fetchQuotes,[])

    function fetchQuotes(){
        fetch(url)
        .then(resp => resp.json())
        .then(setQuotes)
    }

    function searchTerm(term){
        setSearchResult(term)
    }

    function addForm(form){
        const newObj ={
            method: "POST",
            headers:{
              "Content-type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(form)
          }
          fetch(url,newObj)
          .then( resp => resp.json())
          .then(newQuote => setQuotes([...quotes,newQuote]))
    }

    function sortedQuotes(quote){
        console.log(quote)
    }

    const filteredQuotes = quotes.filter((quote)=> quote.author.toUpperCase().includes(searchResult.toUpperCase()))


    return(
        <div>
            <AddQuoteForm addForm={addForm}/>
            <br/>
            <Search searchTerm={searchTerm}/>
            <br/>
            <Sort sortedQuotes={sortedQuotes}/>
            <QoutesHolder quotes={filteredQuotes}/>
        </div>
    )
}


export default QuotesPage;