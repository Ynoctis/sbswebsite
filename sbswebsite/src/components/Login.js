// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post('https://warm-harbor-21177-1d402ead92d1.herokuapp.com/api/token/', {
                username: username,
                password: password,
            });

            // const accessToken = response.data.access_token;
            const accessToken = response.data.access;

            // Store the token in local storage or a secure storage method
            localStorage.setItem('access_token', accessToken);

            // Redirect or perform other actions upon successful login
            navigate("/")
        } catch (error) {
            // Handle login failure
            console.error('Login failed', error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
