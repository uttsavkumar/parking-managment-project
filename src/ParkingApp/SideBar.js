import React, { useEffect } from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'

const SideBar = () => {

    const active = useLocation().pathname
   
    return (

        <div>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
                <a href="#" className="d-flex align-items-center mb-3 p-2 mb-md-0 me-md-auto text-white text-decoration-none">
                    <h5>
                        Parking Managment

                    </h5>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                    
                        <Link to={'/'} className= {active === '/' ? 'nav-link text-white bg-primary ps-4' :'nav-link text-white ps-4'}>
                            Add Vehicles
                        </Link>     
                    </li>
                    <li>
                        <Link to={'/view'} className={active === '/view' ? 'nav-link text-white bg-primary ps-4' :'nav-link text-white ps-4'}>
                            View Vehicles
                        </Link>
                           
                    </li>


                </ul>
                <hr />

            </div>

        </div>
    )
}

export default SideBar