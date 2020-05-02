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
    {summary:"summary for here for it"   ,bookImage:[book1], bookTitle:'here for it', bookAuthor:'by rafyramy'},
    {summary:"summary for here for it" , bookImage:[book2], bookTitle:'the resisters', bookAuthor:'by paul'},
    {summary:"summary for here for it" , bookImage:[book4], bookTitle:'power notebook', bookAuthor:'by paul'},

    {summary:"summary for here for it" , bookImage:[book3], bookTitle:'fiveAmClub', bookAuthor:'by rafyramy'},
    {summary:"summary for here for it" ,bookImage:[book5], bookTitle:'the glass hotel', bookAuthor:'by rafyramy'},

   
          
];

const Recommends = () => {
    
        return(
            <div className={recomends.recomendPage}>
            <Navbar text="Go back"/>

            
            <div className={recomends.container}>
                 <h2 className={recomends.title}>Recommended For You</h2>
    
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
 

export default Recommends