import React from 'react'

const Contact = () => {
    return (
        <section >
            <div className="container">
                <div className="main-contact-div" >
                    <span className='contact-title'>
                        <span><img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png" alt="" /></span>
                        <span><h1>CONTACT</h1></span>
                        <span><img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png" alt="" className='right-flower-img' /></span>
                    </span>
                    <div className="widget-contact-page">

                        <div className="image-div1">
                            <img className="contact-img1" src="https://wpolive.com/nozze/wp-content/uploads/2023/03/right-shape.png" alt="" />
                        </div>
                        <div className="image-div2">
                            <img className="contact-img2" src="https://wpolive.com/nozze/wp-content/uploads/2023/03/rsvp-left-shape.png" alt="" />
                        </div>
                        <div className="contact-page ">
                            <div className="inner-contact-div">
                                <form className='contact-form' >
                                    <input type="text" className='form-control1' placeholder='Name' />
                                    <input type="text" className='form-control1' placeholder='Eame' />
                                    <input type="number" className='form-control1' placeholder='Phone' />
                                    <input type="text" className='form-control1' placeholder='City' />
                                    <input type="text" className='form-control1' placeholder='Query' />
                                    <div className="submit-btn-box">
                                        <button className='btn fw-bold'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
