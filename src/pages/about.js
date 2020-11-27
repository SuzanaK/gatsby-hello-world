import React from "react"
import Header from "../components/header";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Header headerText="about gatsby"/>
      <Header headerText={"it's pretty cool"}/>
      <p>Such wow. Very React.</p>
    </Layout>
  )
}
