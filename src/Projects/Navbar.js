import React, { useState } from 'react'

const Navbar = () => {
    const [hover, setHover] = useState(false)
    const handleOver = () => {
        setHover(!hover)
    }
    return (
        <>
            <div className="navbar" onMouseLeave={() => setHover(false)} >
                <span className='logo'>Navbar</span>
                <div className='searchdiv'>
                    <input type="search"  className='search' placeholder='Search here' />
                </div>
                <div className='nav-item'>
                    <ul className='list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li ><a href="#" onMouseOver={handleOver} >Items</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                {hover &&
                    <div className="subdiv-list" onMouseLeave={handleOver}>
                        <ul className='sub-list'>
                            <li><a href="#">Item1</a></li>
                            <li><a href="#">Item2</a></li>
                            <li><a href="#">Item3</a></li>
                        </ul>
                    </div>
                }
            </div>

        </>
    )
}

export default Navbar