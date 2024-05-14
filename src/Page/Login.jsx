import React, { useState } from 'react';
import {   useNavigate, useLocation } from "react-router-dom"
import {loginUser} from "../Data/Api"

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({email:"", password: ""})

    const location = useLocation()
   // console.log(location)

    function handleSubmit(event) {
        event.preventDefault()

        loginUser(loginFormData)
            .then(data => console.log(data))

       /// console.log(loginFormData)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setLoginFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }



    return (
        <div>
            <div className='logincontainer'>
            {
                location.state?.message &&
                <h3 className="loginfirst">{location.state.message}</h3>
            }
                <h1>Sign in to your accounts</h1>
                <form onSubmit={handleSubmit} className='loginform'>
                    <input 
                    type="email"
                    placeholder="Email address"
                    name='email'
                    onChange={handleChange}
                    value={loginFormData.email}
                    />
                     <input 
                    type="password"
                    placeholder="password"
                    name='password'
                    onChange={handleChange}
                    value={loginFormData.password}
                    />
                     <button>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
