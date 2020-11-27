import React from "react"
import Header from "../components/header";
import { Link } from "gatsby";
import Layout from "../components/layout"


export default function Home() {
  return <Layout style={{ color: `purple`, fontSize: `72px`, margin: `3rem auto`, maxWidth: 600 }}>
    <Link to={"/contact/"}>Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p>This is a paragraph</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image from unsplash"/>
            </Layout>
}
