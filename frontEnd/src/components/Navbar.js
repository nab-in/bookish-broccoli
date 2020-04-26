import React from "react"
import navStyles from "../styles/navbar.module.css"
import Search from "../Icons/Search"
import { Link } from "gatsby"

const Navbar = () => {

  return (
    <div className={navStyles.container}>
     <Link className={navStyles.logo}>NabIn.</Link>
     <div className={navStyles.search}>
     <Search/>
        <input  type="text"/>
     </div>
        
      </div>
    
  )
}

export default Navbar
