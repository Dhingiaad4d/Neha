// import ContentEditor from '../pages/ContentEditor';
// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux"
// import Swal from "sweetalert2"
// import { useDispatch } from "react-redux"
// import { logout } from '../redux/reducers/AuthSlice';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUser} from "@fortawesome/free-regular-svg-icons"
// import { faLeaf } from '@fortawesome/free-solid-svg-icons';
// import Sidebar from './Sidebar';


// const Header = () => {
//     const [isPopUp, setIsPopUp] = useState(false)
//     const [sidePopUp, setSidePopUp] = useState(false)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const selector = useSelector((state) => state.auth)
//     console.log(selector, "selector data")


//     const handleLogout = () => {
//         const swalWithBootstrapButtons = Swal.mixin({
//             customClass: {
//                 confirmButton: "btn btn-success",
//                 cancelButton: "btn btn-danger"
//             },
//             buttonsStyling: false
//         });
//         swalWithBootstrapButtons.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             showCancelButton: true,
//             confirmButtonText: "Yes, Logout!",
//             cancelButtonText: "No, cancel!",
//             reverseButtons: true
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 dispatch(logout());
//                 swalWithBootstrapButtons.fire({
//                     title: "Logout!",
//                     text: "Logout successfully",
//                     icon: "success"
//                 });
//                 localStorage.removeItem('token')
//                 navigate("/login")
//             } else if (
//                 /* Read more about handling dismissals below */
//                 result.dismiss === Swal.DismissReason.cancel
//             ) {
//                 swalWithBootstrapButtons.fire({
//                     title: "Cancelled",
//                     text: "Your imaginary file is safe :)",
//                     icon: "error"
//                 });
//             }
//         });
//     }
//     const TogglePopUp = () => {
//         setIsPopUp(!isPopUp)
//         // <ContentEditor/>
//     }
//     const toggleSidebar = () => {
//         setSidePopUp(!sidePopUp)

//     }
//     return (
//         <div>
//             <nav className="navbar navbar-light bg-dark d-flex justify-content-between">
//                 <div className='left-side'>
//                     <a className="navbar text-light font-weight-bold" style={{
//                         textDecoration: "none",
//                         fontWeight: 600,
//                         fontSize: "24px"
//                     }} onClick={toggleSidebar}><FontAwesomeIcon color='#6f9a37' icon={faLeaf} style={{ fontSize: "30px" }}></FontAwesomeIcon> Navbar</a>
//                 </div>
//                 <div className='right-side'>
//                     <span><FontAwesomeIcon icon={faUser} color='white' style={{ fontSize: "30px" }} onClick={() => setIsPopUp(true)}></FontAwesomeIcon></span>
//                     {/* {isPopUp && <ContentEditor onClose={TogglePopUp}/>} */}
//                     <button className='logout-btn' onClick={handleLogout}>Logout</button>
//                 </div>

//             </nav>
//             {isPopUp && <ContentEditor onClose={TogglePopUp} />}
//             {sidePopUp && <Sidebar onClose={toggleSidebar} />}

//             <ContentEditor
//                 show={isPopUp}
//                 onHide={() => setIsPopUp(false)}
//             />

//             {/* <Sidebar 
//             show={sidePopUp}
//            /> */}
//         </div>
//     )
// }
// export default Header






import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from '../redux/reducers/AuthSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <FontAwesomeIcon icon={faLeaf} sx={{ color: "green" }}></FontAwesomeIcon>ThoughtStream 
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} onClick={()=>handleButton(item)} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


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

    const handleButton = (buttonName) => {
        
        switch (buttonName) {

            case "Home":
                navigate("/homepage")
                break;
            case "About":
                navigate("/about")
                break;
            case "Contact":
                navigate("/contact")
                break;
            default:
                break;
        }
    }

    return (
        <Box sx={{ display: 'flex',}} >
            <CssBaseline />
            <AppBar component="nav" className='navbar-box' >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >

                        <span>
                            <span><img src="https://wpolive.com/nozze/wp-content/uploads/2023/03/section-title.png" alt="" /></span>
                            <span>ThoughtStream</span>
                        </span>

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={()=>handleButton(item)}>
                                {item}
                            </Button>
                        ))}
                        <Button onClick={handleLogout} sx={{ backgroundColor: "transparent", color: "white" }}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className='navbar-box' >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    className='navbar-box'
                >
                    {drawer}

                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;

