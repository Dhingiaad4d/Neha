import ContentEditor from '../pages/ContentEditor';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { logout } from '../redux/reducers/AuthSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser} from "@fortawesome/free-regular-svg-icons"
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';


const Header = () => {
    const [isPopUp, setIsPopUp] = useState(false)
    const [sidePopUp, setSidePopUp] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector((state) => state.auth)
    console.log(selector, "selector data")


    const handleLogout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                swalWithBootstrapButtons.fire({
                    title: "Logout!",
                    text: "Logout successfully",
                    icon: "success"
                });
                localStorage.removeItem('token')
                navigate("/login")
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }


    const TogglePopUp = () => {
        setIsPopUp(!isPopUp)
        // <ContentEditor/>
    }
    const toggleSidebar = () => {
        setSidePopUp(!sidePopUp)

    }
    return (
        <div>
            <nav className="navbar navbar-light bg-dark d-flex justify-content-between">
                <div className='left-side'>
                    <a className="navbar text-light font-weight-bold" style={{
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "24px"
                    }} onClick={toggleSidebar}><FontAwesomeIcon color='#6f9a37' icon={faLeaf} style={{ fontSize: "30px" }}></FontAwesomeIcon> Navbar</a>
                </div>
                <div className='right-side'>
                    <span><FontAwesomeIcon icon={faUser} color='white' style={{ fontSize: "30px" }} onClick={() => setIsPopUp(true)}></FontAwesomeIcon></span>
                    {/* {isPopUp && <ContentEditor onClose={TogglePopUp}/>} */}
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>

            </nav>
            {isPopUp && <ContentEditor onClose={TogglePopUp} />}
            {sidePopUp && <Sidebar onClose={toggleSidebar} />}




            <ContentEditor
                show={isPopUp}
                onHide={() => setIsPopUp(false)}
            />

            {/* <Sidebar 
            show={sidePopUp}
           /> */}
        </div>
    )
}

export default Header


//     < a className = "navbar text-light" style = {{
//     textDecoration: "none",
//         fontWeight: 600,
//             fontSize: "24px"
// }} onClick = { handleLogout } > Logout</ >