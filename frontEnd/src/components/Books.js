import React from 'react'
// import book1 from '../images/alchemist.jpg'
import books from '../styles/books.module.css'

const Books = props => 
    
    <div className={books.container}>
<div className={books.contents}>
        <img className={books.bookImage} src={props.bookUrl} alt={props.bookName}/>

        <div className={books.about}>
            <h4 className={books.title}>
                {props.bookName}
            </h4>
            <p className={books.author}>
                {props.bookSummary}
            </p>
        </div>
    </div>
    </div>
   

export default Books