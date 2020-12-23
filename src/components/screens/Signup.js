import React from 'react'
import {Link} from 'react-router-dom'
const Signup=() =>{
    return (
        <div>
            <div className="my-card">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">Signup</button>
                <br/><br/>
                <h6>
                    <Link to='/login'>Already have an Account ?</Link>
                </h6>
            </div>
        </div>
        </div>
    )
}

export default Signup
