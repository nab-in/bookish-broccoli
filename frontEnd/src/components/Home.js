import React from 'react'
import TopBook from '../images/5amClub.png'
import styles from '../styles/home.module.css'
import "typeface-roboto-slab"
import Save from '../Icons/Save'
import recommends from '../images/recomends1.svg'
import popular from '../images/popular.png'
import upload from '../images/upload.png'


const Home = ()=> {
    return (
        <div className={styles.home}>
            
       
        <div className={styles.homeContainer}>
            <div className={styles.welcomeText}>
               {/* <h1 className={styles.welcomeTitle}>Add reading to a new Hobby</h1> */}
               {/* <p className={styles.subTitle}>NabIn >   Browse >  Share</p> */}
        </div>
        <div className={styles.topPickContainer}>
        <div className={styles.topPickContents}>
              <div className={styles.topPickText}>
            <h3 className={styles.topPickTitle}>Today top Pick <br/><span className={styles.author}>by rafyramy</span></h3>
            <img className={styles.topBookImg} src={TopBook} alt="topBook"/>

            <Save/>

            </div>

        </div>
        </div>
        <h3 className={styles.seeMore}>see more (200+)</h3>
        
       
        
       
        </div>
        <div className={styles.categories}>
            <div className={styles.recommends}>
            <svg  className={styles.recomendsIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>

            <h2>recommends</h2>
            </div>
            <div className={styles.popular}>
            <svg className={styles.popularIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                <h2>popular</h2>
            </div>
            <div className={styles.upload}>
            <svg className={styles.uploadIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm4 10h-3v4h-2v-4h-3l4-4 4 4z"/></svg>
                <h2>upload</h2>
            </div>
           

        </div> 
        </div>
    )
}

export default Home