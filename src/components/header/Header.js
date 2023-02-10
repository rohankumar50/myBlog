import React from 'react'
import './header.css'
function Header() {
    return (
        <div className='header'>
            <div className='header_body'>
                <div className='header_logo'>
                    <p className='text'>logo</p>
                </div>
                <div>
                    <p className='text'>search</p>
                </div>
            </div>
        </div>
    )
}

export default Header
