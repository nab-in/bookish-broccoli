import React from 'react'
import styles from '../styles/upload.module.css'
import Navbar from './Navbar'

const Upload = () => {
    return(
        <div className ={styles.uploadContainer}>
        {/* <Navbar text="Go back"/> */}
        {/* <Navbar text="Go back"/> */}

           <h2>Got a book to share with friends? </h2>
           <button className={styles.uploadButton}>
               Upload Here!
           </button>
        </div>
    )
}
export default Upload