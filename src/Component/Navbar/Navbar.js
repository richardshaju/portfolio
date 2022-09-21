import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <div className='left'>
                    <h2 className='name'><span style={{ color: 'red' }}>R</span>ichard Shaju</h2>
                </div>
                <div className='right'>
                    <ul>
                        <li>
                        <span class="material-symbols-outlined">home</span><p>Home</p>
                        </li>
                        <li>
                        <span class="material-symbols-outlined">person</span><p>About</p>
                        </li>
                        <li>
                        <span class="material-symbols-outlined">design_services</span><p>Service</p>
                        </li>
                        <li>
                        <span class="material-symbols-outlined">home_repair_service</span><p>Works</p>
                        </li>
                        <li>
                        <span class="material-symbols-outlined">mail</span><p>Contact</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar