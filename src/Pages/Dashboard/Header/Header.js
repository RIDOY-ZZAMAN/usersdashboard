import React from 'react';
import './Header.css'
import band from '../../../Images/band.JPG';


const Header = () => {
    return (
        <div>
            {/* Nav Section */}
            <nav className="navbar navbar-expand-lg navbar-light navbarBackground ">
                <div className="container-fluid">
                    <img className='ms-3' src={band} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                            </li>
                        </ul>
                        <div className="d-flex align-items-center me-3 ">
                            <div className='cirular me-3'>
                                <i class="fas fa-cog mt-2 ms-2"></i>
                            </div>
                            <div className='border-end border-2'>
                                <div className='me-3'>
                                    <button class=" border-0 cirular position-relative ">
                                        <i class="far fa-bell"></i>
                                        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className='ms-3 shadow-sm p-2 bg-body rounded d-flex'>
                                <div className=' cirular'>
                                    <i class="far fa-user mt-2 ms-2 "></i>
                                </div><span className='mx-2'>Sathishkumar</span><i class="fas fa-chevron-down mt-1"></i></div>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Header;


