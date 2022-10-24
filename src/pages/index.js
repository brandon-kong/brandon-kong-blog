import * as React from "react"

import Layout from "../components/layout"
import Navbar from "../components/global/Navbar"
import Nav from "../components/global/Navbar"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Navbar>
          
        </Navbar>
      </Layout>
    </main>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <title>Hello!</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"/>
    </>
  )
}