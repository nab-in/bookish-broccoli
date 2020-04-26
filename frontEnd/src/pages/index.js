import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
// import Recommended from '../components/Recommended'
// import Upload from '../components/Upload'
// import Popular from "../components/Popular"
import Home from "../components/Home"
const Main = () => {
  return (
    <Layout>
      <Navbar />
      <Home/>
    {/* <Recommended/> */}
    {/* <Upload/> */}
    {/* <Popular/> */}
    </Layout>
  )
}
export default Main
