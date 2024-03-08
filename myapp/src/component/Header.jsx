import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { logout } from '../redux/reducers/AuthSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fauser} from "@fortawesome/free-regular-svg-icons"


const Header = () => {
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
    return (
        <div>
            <nav className="navbar navbar-light bg-dark d-flex">
                <div>
                    <a className="navbar text-light font-weight-bold" style={{
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "24px"
                    }}>Navbar</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={fauser}></FontAwesomeIcon>
                    <a className="navbar text-light" style={{
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "24px"
                    }} onClick={handleLogout} >Logout</a>
                </div>

            </nav>
        </div>
    )
}

export default Header