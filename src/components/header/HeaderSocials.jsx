import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/adam-knapik' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/adam-knapik' target='_blank'><BsGithub /></a>
        <a href='#contact'><GrMail /></a>
    </div>
  )
}

export default HeaderSocials