import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Recommended from '../components/Recommended'
import Upload from '../components/Upload'
const Main = () => {
  return (
    <Layout>
      <Navbar />
    <Recommended/>
    <Upload/>
    </Layout>
  )
}
export default Main
