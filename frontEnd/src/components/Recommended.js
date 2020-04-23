import React from 'react'
import recomends from '../styles/recommended.module.css'
import Books from '../components/Books'
import book1 from '../images/5amClub.png'
import book2 from '../images/11minutes.jpg'

// const Books = ()=><div>
// {props.img}
// </div> 
const Recommends = () => {
    return(
        <div className={recomends.container}>
             <h2 className={recomends.title}>Recommended For You</h2>

             <Books/>
            
             {/* <Books img={book2}/> */}
        </div>
    )
}
export default Recommends