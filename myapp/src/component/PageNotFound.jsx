import React from 'react'
import bgimg from "../assets/images/loginPageImg.jpg"


const PageNotFound = () => {

 
  return (
    <div className='main' style={{backgroundImage:`url(${bgimg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <h1 style={{fontSize:"48px",color:"white"}}>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound
