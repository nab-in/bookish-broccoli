import React from 'react'
import book1 from '../images/alchemist.jpg'
import books from '../styles/books.module.css'
const Books = ()=> {
    return (
        <div className={books.container}>
 <div className={books.contents}>
            <img className={books.bookImage} src={book1} alt="alchemist"/>

            <div className={books.about}>
                <h4 className={books.title}>
                    Alchemist vol2
                </h4>
                <p className={books.author}>
                    by Paul coleho
                </p>
            </div>
        </div>
        </div>
       
    )
}
export default Books