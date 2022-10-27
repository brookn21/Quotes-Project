// import React, { useEffect, useState } from "react";
// import QuotesHolder from "./QuotesHolder";
// import Search from "./Search";
// import AddQuoteForm from "./AddQuoteForm";
// import Sort from "./Sort"
// import RandomQuote from "./RandomQuote";
// import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

// function QuotesPage(){

//     const url = " http://localhost:3000/quotes"

//     const [quotes, setQuotes] = useState([])
//     const [searchResult, setSearchResult] = useState("")
//     const [ category, setCategory] = useState("")
//     const [ favQuotes, setFavQuotes] = useState([])

//     useEffect(()=> fetchQuotes,[])

//     function fetchQuotes(){
//         fetch(url)
//         .then(resp => resp.json())
//         .then(setQuotes)
//     }

//     function searchTerm(term){
//         setSearchResult(term)
//     }

//     function addForm(form){
//         const newObj ={
//             method: "POST",
//             headers:{
//               "Content-type": "application/json",
//               "Accept": "application/json"
//             },
//             body: JSON.stringify(form)
//           }
//           fetch(url,newObj)
//           .then( resp => resp.json())
//           .then(newQuote => setQuotes([...quotes,newQuote]))
//     }

//     function sortedQuotes(quote){
//         setCategory(quote)
//     }

//     const filteredQuotes = quotes.filter((quote)=> quote.author.toUpperCase().includes(searchResult.toUpperCase()))

    
//     let quotesSorted = [] 
//     function createSortedArray(){
//         if(category === "All"){
//             quotesSorted = [...filteredQuotes]
//         }
//         else{
//             quotesSorted = filteredQuotes.filter((quote)=> quote.category.toUpperCase().includes(category.toUpperCase()))
//         }
//     }

//     createSortedArray()

//     function setAFavoriteQuote(quote){
//     if( favQuotes.includes(quote.id)){
//         setFavQuotes(favQuotes.filter((id) => id !== quote.id))
//       }
//     else{
//     setFavQuotes([...favQuotes, quote.id])
//     }
//     }

//     // if( favQuotes.includes(quote)){
//     //     setFavQuotes(favQuotes.filter(id => id !== quote.id))
//     //   }
//     // else{
//     // setFavQuotes([...favQuotes, quote])
//     // }

//     // setFavQuotes(favQuotes.filter(id => id !== quote.id))
//     // setFavQuotes([...favQuotes, quote])

//     return(
//         <div>
//             <RandomQuote quotes={quotes}/>
//             <br/>
//             <AddQuoteForm addForm={addForm}/>
//             <br/>
//             <Search searchTerm={searchTerm}/>
//             <br/>
//             <Sort sortedQuotes={sortedQuotes}/>
//             <QuotesHolder 
//             quotes={quotesSorted}
//             setAFavoriteQuote={setAFavoriteQuote}
//             />
//         </div>
//     )
// }


// export default QuotesPage;