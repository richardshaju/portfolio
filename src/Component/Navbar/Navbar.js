import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <div className='left'>
                    <h2 className='name'>Richard Shaju</h2>
                </div>
                <div className='right'>
                    <ul>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Service</p>
                        </li>
                        <li>
                            <p>Works</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar