import React from 'react'
const About = () => {
    return (
        <section>
            <div className="container">
                <div className="about-page">
                    <span className='about-title'>
                        <span><img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png" alt="" /></span>
                        <h1 style={{ fontFamily: "My Custom Font" }}>ABOUT US</h1>
                        <span><img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png" alt="" /></span>
                    </span>
                    <div className="about-content">
                        <div className='row about-row'>
                            <div className="col-md-6 about-left">
                                <div className="about-image">
                                    <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/about.jpg"
                                    style={{                                          borderRadius: "none" }} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 about-right" >
                                <div className="about-right-side">
                                    <div className="right-side-content">
                                        <h3 style={{ fontFamily: "Petit Formal Script", textAlign: "center", color: "#626B72", fontFamily: "My Custom Font" }}>About Us</h3>
                                        <img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png center" alt="" />
                                        <div>
                                            <p >
                                                If you're planning your dream wedding, you might
                                                be wondering how tofind the best wedding planner for
                                                your big day. A wedding planner can help you with
                                                everything from budgeting and timelines to vendor selection
                                                and design. Whatever type of wedding planner you
                                                choose, make sure it uits your needsand
                                                helps you achieve your dream wedding.
                                            </p>
                                            <p>
                                                If you're planning your dream wedding, you might
                                                be wondering how tofind the best wedding planner for
                                                your big day. A wedding planner can help you with
                                                everything from budgeting and timelines to vendor selection
                                                and design. Whatever type of wedding planner you
                                                choose, make sure it uits your needsand
                                                helps you achieve your dream wedding.
                                            </p>

                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <button style={{ border: "none", backgroundColor: "#C8A898", color: "white", padding: "5px 10px" }}>Appointment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
