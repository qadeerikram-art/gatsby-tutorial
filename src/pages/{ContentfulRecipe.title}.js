import { graphql, Link } from 'gatsby'
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/Layout';
import slugify from 'slugify';
import SEO from '../components/SEO';

const RecipeTemplate = ({ data }) => {
    const { title, cookTime, content, prepTime, serving,
        description: { description }, image } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { tags, instructions, ingredients, tools } = content
    return (
        <Layout>
            <SEO title={title} description={description} />
            <div className='page'>
                <div className='recipe-page'>
                    {/* hero */}
                    <section className='recipe-hero'>
                        <GatsbyImage image={pathToImage} alt={title}
                            className='about-img'
                        />
                        <article className='recipe-info'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* icons */}
                            <div className='recipe-icons'>
                                <article>
                                    <BsClock />
                                    <p>{prepTime} min.</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <p>{cookTime} min.</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <p>{serving} min.</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p className='recipe-tags'>
                                Tags :
                                {tags.map((tag, index) => {
                                    const slug = slugify(tag, { lower: true })
                                    return (
                                        <Link key={index} to={`/tags/${slug}`}>{tag}</Link>
                                    )
                                })}
                            </p>
                        </article>
                    </section>
                    {/* rest of the content */}
                    <section className='recipe-content'>
                        <article>
                            <h4>instructions</h4>
                            {instructions.map((item, index) => {
                                return (
                                    <div key={index} className='single-instruction'>
                                        <header>
                                            <p>step {index + 1}</p>
                                        </header>
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                        </article>
                        <article>
                            <h4>tools</h4>
                            {tools.map((item, index) => {
                                return (
                                    <p key={index}
                                        className='single-tools'>
                                        {item}
                                    </p>
                                )
                            })}
                        </article>
                    </section>
                </div>
            </div>
        </Layout>

    )
}

export const query = graphql`
query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      content {
        tags
        tools
        ingredients
        instructions
      }
      cookTime
      description {
        description
      }
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
  `

export default RecipeTemplate; 