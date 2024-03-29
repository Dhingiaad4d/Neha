import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import womenimg1 from "../assets/images/post-single-img.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ColorItem from './ColorItem';
import { useDispatch } from "react-redux"
import { changeTheme } from '../redux/reducers/ThemeSlice';
import {useSelector} from "react-redux"

const HomePage = () => {
    const dispatch = useDispatch()
    // const activeTheme =useSelector((state)=>state.theme)
    // console.log(activeTheme,"activeTheme")
    const [isOpen, setIsOpen] = useState(false);
    const handleDropDown = () => {
        setIsOpen(!isOpen)
    }

    const color = ["red", "pink", "blue"];

    const themeChangefunc = (themecolor) => {
        dispatch(changeTheme(themecolor))

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
                                <li className='blog-li' onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>BLOG
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
                    <div className="row"  >
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
                                <div className='entry-media2'>
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
                                    <p>Congratulations, you’re getting married! This is a time for celebration and joy, and your wedding day will
                                        undoubtedly be one of the most memorable days of your life. As you begin to plan your wedding, it’s
                                        important to think about how you want to share this special day with your loved ones. One way to do this
                                        is by writing a wedding post article that captures the spirit of your big day and shares it with the world.
                                    </p>
                                    <p>
                                        Here are some tips to help you write a wedding post article that your guests will love: Start with a strong
                                        introduction: Begin your post with a heartfelt message that sets the tone for your wedding day. Share your
                                        excitement and gratitude for the people who will be joining you in celebrating your love. Include important
                                        details: Your guests will want to know.
                                    </p>
                                    <blockquote className='blockquote'>
                                        <p>A picture is worth a thousand words, so make sure to include plenty of photos
                                            in your post. This will help your guests relive the special moments of your
                                            wedding day
                                        </p>
                                    </blockquote>
                                    <p>
                                        Thank your guests: Your guests are an important part of your wedding day, so make sure to thank them for
                                        being there to celebrate with you. Express your gratitude for their love and support, and let them know how
                                        much they mean to you.A picture is worth a thousand words, so make sure to include plenty of photos in
                                        your post. This will help your guests relive the special moments of your.
                                    </p>
                                    <p>
                                        Writing a wedding post article is a great way to share the love and joy of your special day with your guests.
                                        By following these tips, you can create a post that captures the spirit of your wedding and creates a lasting
                                        memory for you and your loved ones. Congratulations on your wedding day, and may your love continue to
                                        grow and flourish for years to come!
                                    </p>
                                </div>

                                <div className='mt-5'><hr /></div>
                                <div className="tag-share-wrap">
                                    <div className="tag-share1 left-tag">
                                        <span>TAGS:</span>
                                        <ul className='tag-share1-ul left-tag-ul'>
                                            <li><Link>Photography</Link></li>
                                            <li><Link>Wedding</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tag-share1 right-tag">
                                        <span>Share:</span>
                                        <ul className='tag-share1-ul right-tag-ul'>
                                            <li><Link><FontAwesomeIcon className='icon-class faFacebook' icon={faFacebook} color='blue'></FontAwesomeIcon></Link></li>
                                            <li><Link><FontAwesomeIcon className='icon-class faLinkedin' icon={faLinkedin} color='blue'></FontAwesomeIcon></Link></li>
                                            <li><Link><FontAwesomeIcon className='icon-class faTwitter' icon={faTwitter} color='blue'></FontAwesomeIcon></Link></li>
                                            <li><Link><FontAwesomeIcon className='icon-class faPinterest' icon={faPinterest} color='red'></FontAwesomeIcon></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div><hr /></div>
                                <div className='leave-comment'>
                                    <div className="comment-respond">
                                        <h3>ADD YOUR COMMENT</h3>
                                        <form className='comment-form'>
                                            <div className='form-inputs'>
                                                <input type="text" className='form-control' placeholder='Name' />
                                                <input type="text" className='form-control' placeholder='Email' />
                                                <input type="text" className='form-control' placeholder='Website' />
                                                <textarea name="textarea" id="" cols="30" rows="10" className='form-control' placeholder='Write your note...'></textarea>
                                            </div>
                                            <div className="form-submit mt-3">
                                                <button className='blg-btn' type='submit'>Post Comment</button>
                                            </div>
                                        </form>
                                    </div>
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
                                    <hr />
                                    <div className="Posts">
                                        <div className="row post">
                                            <div className='col-md-5 image-holder'>
                                                <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/grid-post-3.jpg" style={{ width: "150px", height: "150px" }} alt="" />
                                            </div>
                                            <div className='col-md-7 mt-3 recent-details'>
                                                <p>Top 100 Wedding Ring Design</p>
                                                <span className='d-flex justify-content-flex-start'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span>8March,2024</span></span>
                                            </div>
                                        </div>
                                        <div className="row post">
                                            <div className='col-md-5 image-holder '>
                                                <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/grid-post-2.jpg" style={{ width: "150px", height: "150px" }} alt="" />
                                            </div>
                                            <div className='col-md-7 mt-3 recent-details'>
                                                <p>Best Wedding Gift Idea</p>
                                                <span className='d-flex justify-content-flex-start'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span>8March,2024</span></span>
                                            </div>
                                        </div>
                                        <div className="row post">
                                            <div className='col-md-5 image-holder'>
                                                <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/grid-post-1.jpg" style={{ width: "150px", height: "150px" }} alt="" />
                                            </div>
                                            <div className='col-md-7 mt-3 recent-details'>
                                                <p>Perfect Photogtaphy Of wedding</p>
                                                <span className='d-flex justify-content-flex-start'><FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span>8March,2024</span></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tag-cloud2 widget-tag">
                                    <h3>Tags</h3>
                                    <hr />
                                    <div className="tagCloud">
                                        <ul className='tagcloud-ul '>
                                            <li className='tag-cloud-link'><Link>bride & groom</Link></li>
                                            <li className='tag-cloud-link'><Link>events</Link></li>
                                            <li className='tag-cloud-link'><Link>flower</Link></li>
                                            <li className='tag-cloud-link'><Link>wedding</Link></li>
                                            <li className='tag-cloud-link'><Link>photography</Link></li>
                                            <li className='tag-cloud-link'><Link>idea</Link></li>
                                            <li className='tag-cloud-link'><Link>solution</Link></li>
                                            <li className='tag-cloud-link'><Link>creative</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='colorchanger'>
                    Lorem ipsum dolor sit amet.
                    {
                        color.map((color, index) => (
                            <button style={{ background: color }} onClick={() => themeChangefunc(color)}>{color}</button>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default HomePage
