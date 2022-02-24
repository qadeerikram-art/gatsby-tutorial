import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
{
site {
    siteMetadata {
      author
      complexData {
        age
        name
      }
      description
      person {
        age
        name
      }
      simpleData
      title
    }
  }
}
`
const FetchData = () => {
    const {site:{siteMetadata:{author}}} = useStaticQuery(getData)
    return (
        <div>{author}</div>
    )
}

export default FetchData