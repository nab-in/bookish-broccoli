import React from "react"
import layoutStyle from "../styles/layout.module.css"
import "typeface-roboto-slab"
const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>{props.children}</div>
    </div>
  )
}

export default Layout
