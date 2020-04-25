import React from "react"
import navStyles from "../styles/navbar.module.css"
import Search from "../Icons/Search"
const Navbar = () => {

  return (
    <div className={navStyles.container}>
     <h2 className={navStyles.logo}>NabIn.</h2>
     <div className={navStyles.search}>
     <Search/>
        <input  type="text"/>
     </div>
        
      </div>
    
  )
}

export default Navbar
