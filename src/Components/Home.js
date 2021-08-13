import React from 'react'
import logo from '../Assets/images/logo.png'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>  
            <div className="homePage">
                <Link to="/character">
                <img src={logo} alt="logo" className="logo"/>
                </Link>
                
            </div>
        </>
    )
}
