import React, { useState } from 'react';

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({email:"", password: ""})


    function handleSubmit(event) {
        event.preventDefault()
        console.log(loginFormData)
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
