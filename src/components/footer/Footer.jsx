import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'


export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Adam Knapik</a>

      <ul className='permalinks'>
        <li><a href='#'>Strona Główna</a></li>
        <li><a href='#projects'>Projekty</a></li>
        <li><a href='#contact'>Kontakt</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/adam-knapik' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/adam-knapik' target='_blank'><BsGithub /></a>
        <a href='#contact'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer