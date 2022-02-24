import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
        <p>
            &copy; {new Date().getFullYear()}
            <span>Simplye Recipes</span>. Built with {" "}
            <a href='https://ww.gatsbjs.com/'>Gatsby</a>
        </p>
    </footer>
  )
}

export default Footer