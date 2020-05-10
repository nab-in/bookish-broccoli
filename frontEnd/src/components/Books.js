import React from 'react'
// import book1 from '../images/alchemist.jpg'
import books from '../styles/books.module.css'
import { Link } from "gatsby"

const Books = props => 
    
    <Link to={props.bookTitle} className={books.container}>
<div className={books.contents}>

      <p className={books.summary}>
          {props.summary}
      </p>
        <img className={books.bookImage} src={props.bookImage} alt={props.bookTitle}/>

        <div className={books.about}>
            <h4 className={books.title}>
                {props.bookTitle}
            </h4>
            <p className={books.author}>
                {props.bookAuthor}
            </p>
        </div>
    </div>
    </Link>
   

export default Books