import React from 'react'
import styles from '../styles/bookPage.module.css'
import Navbar from '../components/Navbar'
import Books from '../components/Books'

const Book = ()=> {
    return(
        <div className={styles.bookPage}>
        <Navbar text="Go back"/>
          <div className={styles.bookContents}>
              <Books/>
          </div>
        </div>
    )
}
export default Book