import React from "react";
import Layout from "../components/Layout";
import Images from "../components/example/Images";
import { StaticImage } from "gatsby-plugin-image";
import Gallery from "../components/example/Gallery";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

export default function Home() {
  return (

    <div>
      <Layout>
        <SEO title={'Home'}/>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className='hero-img'
              placeholder='tracedSVG'
              Layout='fullWidth' 
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
          {/* <Gallery /> */}
        <AllRecipes />
        </main>
      </Layout>
    </div>
  )
}
