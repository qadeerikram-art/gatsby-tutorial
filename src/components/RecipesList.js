import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {

    return (
        <div className='recipes-list'>
            {recipes.map(recipe => {
                const { id, title, image, prepTime, cookTime } = recipe;
                const pathImage = getImage(image)
                const slug = slugify(title, {lower: true})
                return (
                    <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage image={pathImage}
                            className='recipe-img'
                            alt={title}
                        />
                        <h5>{title}</h5>
                        <p>
                            Prep : {prepTime}min | Cook : {cookTime}min
                        </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default RecipesList