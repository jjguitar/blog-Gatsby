import React from "react"
import Header from '../components/header'
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  )
}