import React from 'react';
import Layout from "../components/Layout";
import { graphql, Link } from 'gatsby';
import setuptags from '../utils/setupTags';
import slugify from 'slugify';
import SEO from '../components/SEO';


const Tgas = ({ data }) => {
  console.log("data is : ", data)
  const newtags = setuptags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title={'Tags'} />
      <main className='page'>
        <section className='tags-page'>
          {newtags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className={'tag'}>
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tgas