import React, { useState } from 'react'
import './LoginPage.css'

const LoginPage = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <div className='form-Bx'>
            <form action="">
                <div>
                    <input 
                        type="text" 
                        name="email"
                        id="email"
                        placeholder='Email'
                        autoComplete='off' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage