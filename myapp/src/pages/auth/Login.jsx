import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { fetchLogin } from '../../redux/reducers/AuthSlice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, "user data")
        dispatch(fetchLogin(user))
        alert("Login Successfully")
        debugger
        navigate('/homepage')

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className='wrapper'>
            <div className='container main'>
                <div className='center-div'>
                    <div className='row'>
                        <div className='col-md-6 side-image'>
                            <div className="side-image">
                            <div className='text'>
                                <p>Welcome to <i>login page</i></p>
                                </div>
                            </div>
                        </div>
                   
                        <div className='col-md-6 right'>
                            <div className='login-input-box'>
                                <h3>Login Here</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-field'>
                                        <input type='text' className='input' id='username' value={user.username} name='username' onChange={handleChange} autoComplete='off' required />
                                        <label htmlFor='username'>Username</label>
                                    </div>
                                    <div className='input-field'>
                                        <input type='password' className='input' id='password' value={user.password} name='password' onChange={handleChange} autoComplete='off' required />
                                        <label htmlFor='password'>Password</label>
                                    </div>
                                    <div className='input-field'>
                                        <input type='submit'
                                            className='submit'
                                            value="SignIn" />
                                    </div>
                                    <div className='signin'>
                                        <span>Already have an account?<a href='#'>
                                            Login here
                                        </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
