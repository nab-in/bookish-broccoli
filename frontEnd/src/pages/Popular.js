import React from 'react'
import recomends from '../styles/recommended.module.css'
import Upload from '../components/Upload'
// import books from '../styles/books.module.css'
import Navbar from '../components/Navbar'
import Books from '../components/Books'
import book3 from '../images/11minutes.jpg'
import book1 from '../images/here for it.jpg'
import book2 from '../images/the resisters.jpg'
import book4 from '../images/poweNotebook.jpg'
import book5 from '../images/glass.jpg'


const bookData =[
    {bookUrl:[book1], bookName:'here for it', bookSummary:'by rafyramy'},
    {bookUrl:[book2], bookName:'the resisters', bookSummary:'by paul'},
    {bookUrl:[book4], bookName:'power notebook', bookSummary:'by paul'},

    {bookUrl:[book3], bookName:'fiveAmClub', bookSummary:'by rafyramy'},
    {bookUrl:[book5], bookName:'the glass hotel', bookSummary:'by rafyramy'},

   
          
];

const Popular = () => {
    
        return(
            <div className={recomends.recomendPage}>
            <Navbar text="Go back"/>

            
            <div className={recomends.container}>
                 <h2 className={recomends.title}>Most Popular Picks</h2>
    
                 <div className={recomends.bookContents}>
                     {bookData.map(info =>
                     <Books{...info}/>
                     )}
                 </div>
                
            </div>
            <Upload/>
            </div>
        );
    }
 

export default Popular