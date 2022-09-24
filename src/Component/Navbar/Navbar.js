import React, { useState, useEffect } from 'react'
import './Navbar.css'
function Navbar() {

    const [color, setColor] = useState('');

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            setColor('rgba(0, 0, 0, 10');
        } else {
            setColor('');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    })
    return (
        <div className='navbar' style={{ backgroundColor: color }}>
            <nav>
                <div className='left'>
                    <a href="/">
                         <h2 className='name'><span style={{ color: 'red' }}>R</span>ichard Shaju</h2>
                    </a>
                </div>
                <div className='right'>
                    <ul>
                        <li>
                            <a href="#home">
                                <span className="material-symbols-outlined">home</span><p>Home</p>
                                </a>
                        </li>
                        <li>
                            <a href="#about">
                            <span className="material-symbols-outlined">person</span><p>About</p>
                            </a>
                        </li>
                        <li>
                            <a href="#service">
                            <span className="material-symbols-outlined">design_services</span><p>Service</p>
                            </a>
                        </li>
                        <li>
                        <a href="#works">
                            <span className="material-symbols-outlined">home_repair_service</span><p>Works</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                            <span className="material-symbols-outlined">mail</span><p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar