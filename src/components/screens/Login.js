import React from 'react'
import{Link} from 'react-router-dom';
const Login=() =>{
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">Login</button>
                <br/><br/>
                <h6>
                    <Link to='/signup'>Don't have an Account ?</Link>
                </h6>
            </div>
        </div>
    )
}

export default Login
