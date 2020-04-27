import React from 'react'
import styles from '../styles/bookPage.module.css'
import Navbar from '../components/Navbar'
const Book = ()=> {
    return(
        <div className={styles.bookPage}>
        <Navbar text="Go back"/>

           {/* <h3>Book</h3> */}
        </div>
    )
}
export default Book