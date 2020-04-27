import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
const Main = () => {
  return (
    <Layout>
      <Navbar text="NabIn" />
      <Home/>
    </Layout>
  )
}
export default Main
