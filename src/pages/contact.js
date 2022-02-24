import React from 'react';
import Layout from "../components/Layout";
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const Contact = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  return (
    <Layout>
      <SEO title={'contact'} />
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want to Get In Touch?</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
            <p>Latin professor at Hampden-Sydney College in Virginia, looked up</p>
            <p>et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45</p>
          </article>
          <article>
            <form className='form contact-form'
              action="https://formspree.io/f/xdobgrnv"
              method="POST">
              <div className='form-row'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Your Email</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' />
              </div>
              <button type='submit' className='btn block'>Submit</button>
            </form>
          </article>
        </section>
        <section className='featured-recipes'>
          <h5>Loot at this!!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default Contact