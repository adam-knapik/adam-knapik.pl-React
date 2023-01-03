import React from 'react'
import './header.css';
import HeaderSocials from './HeaderSocials';
import { IoIosArrowDown } from 'react-icons/io'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Adam Knapik</h1>
        <h5 className="text-light"></h5>
      
        <HeaderSocials />

        <a href='#projects' className='scroll__down'><IoIosArrowDown /></a>
      </div>
    </header>
  )
}

export default Header