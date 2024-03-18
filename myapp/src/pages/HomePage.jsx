import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import womenimg1 from "../assets/images/women-img1.jpg"
import womenimg1 from "../assets/images/post-single-img.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
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
            <section className='wpo-page-title'>
                <div className='container' style={{
                    background: "none",
                    display: "block"
                }}>
                    <div className="row" style={{
                        background: "none", height: "auto"
                    }}  >
                        <div className="col col-xs-12" style={{
                            background: "none"
                        }}>
                            <div className="wpo-breadcrumb-wrap">
                                <h2>Blog</h2>
                                <nav>
                                    <ul className='breadcrumb'>
                                        <li ><Link className='home-link'>Home</Link></li>
                                        <li ><Link className='blog-link'>Blog</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="wpo-blog-section">
                    <div className="row">
                        <div className="col-lg-8" >
                            <div className="wpo-blog-content">
                                <div className="entry-media">
                                    <img src={womenimg1} alt />
                                    {/* <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/post-single-3.jpg" alt /> */}
                                </div>
                                <div className='entry-media2 mt-2'>
                                    <ul className='entry-media-ul'>
                                        <li>
                                            <span><FontAwesomeIcon icon={faUser} color='#636893'></FontAwesomeIcon> <Link>main-admin</Link></span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon icon={faComment} color='#636893'></FontAwesomeIcon> <Link>comment(0)</Link></span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon icon={faCalendar} color='#636893'></FontAwesomeIcon> <Link>March 18,2024</Link></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3>Top 10 wedding fresh flower decoration idea.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-5 ">
                            <div className="blog-sidebar" >
                                <div className="widget widget_search2">
                                    <h3>Search</h3>
                                    <hr className='hr1' />
                                    {/* <span><hr className='hr1' /></span> */}
                                    <div className='search-widget'>
                                        <form className='searchform'>
                                            <div className="input-search">
                                                <input type="text" id='search-form-1' placeholder='Search...' />
                                                <button className="search-btn" type='submit'><FontAwesomeIcon icon={faSearch} color='white'></FontAwesomeIcon></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget_categories2 mt-5">
                                    <h3>Categories</h3>
                                    <hr />
                                    <ul className='category-ul'>
                                        <li className='cat-item-1'>Photography</li>
                                        <li className='cat-item-1'>Professional Design</li>
                                        <li className='cat-item-1'>Wedding Dress</li>
                                        <li className='cat-item-1'>Wedding Flowers</li>
                                        <li className='cat-item-1'>Wedding Tips</li>
                                        <li className='cat-item-1'>Wedding Events</li>

                                    </ul>
                                </div>
                                <div className="recent-posts">
                                    <h3>Recent Posts</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
