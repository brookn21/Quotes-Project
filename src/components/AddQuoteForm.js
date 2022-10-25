import React,{ useState } from "react";

function AddQuoteForm(props){

    const {addForm} = props

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [category , setCategory] = useState("")

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            const newForm ={
                quote:quote,
                author: author,
                category:category
            }
            addForm(newForm)
            setAuthor("")
            setCategory("")
            setQuote("")
        }
        }>
            <input type="text" name="quote" placeholder="enter a quote..."
            value={quote}
            onChange={(e)=> setQuote(e.target.value)}/>
            <br/>
            <input type="text" name="author" placeholder="enter an author..."
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}/>
            <br/>
            <input type="text" name="category" placeholder="enter a category"
            value={category}
            onChange={(e)=> setCategory(e.target.value)}/>
            <br/>
            <input type="submit" name="submit"/>
        </form>
    )
}

export default AddQuoteForm;