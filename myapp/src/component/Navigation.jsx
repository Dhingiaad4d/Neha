import React from 'react'
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropDown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className='navigation navbar-expand-lg navbar-light original'>
                <div className='section'>
                    <div className="container">
                        <div className='home-header'>
                            <h1 >NOZZE</h1>
                            <ul className='home-ul'>
                                <li>HOME</li>
                                <li>STORY</li>
                                <li>GALLERY</li>
                                <li>SHOP</li>
                                <li className='blog-li' onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>BLOG {/* Use onMouseEnter and onMouseLeave to toggle dropdown */}
                                    <div className="dropdown-content">
                                        <li>Default Blog</li>
                                        <li>Blog left sidebar</li>
                                        <li>Blog Single</li>
                                    </div>
                                </li>
                            </ul>
                            <h1 >Search</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
