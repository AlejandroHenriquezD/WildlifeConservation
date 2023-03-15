import React from 'react';
import NavBarPrimary from './NavBarPrimary'
import "./Header.scss"

const Header = () => {
    return (
        <header className='header'>
            {/* <h1 className='title'>INSERT LOGO</h1> */}
            <a  href="/"><img className="header-logo" src="Images/Wildlife_logo.png" alt=""/></a>
            <NavBarPrimary />
        </header>
    )
}

export default Header;