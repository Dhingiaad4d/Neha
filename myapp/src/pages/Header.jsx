import React from 'react'
// import { useAuth } from '../features/Auth/Auth'
import { NavLink } from 'react-router-dom';

const Header = () => {
    // const auth=useAuth();
   
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-light text-align-left">Navbar</a>
                {/* <form className="form-inline">
                   {
                    !auth?.user ?  <NavLink className='font-weight-bold' to="/login">login</NavLink> :
                    <NavLink className='font-weight-bold' to="/login">Logout</NavLink>
                   }
                </form> */}
            </nav>
        </div>
    )
}

export default Header