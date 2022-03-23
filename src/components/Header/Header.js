import React from 'react';


import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header-bg">
            <div className="container container-fluid">
                <a className="navbar-brand fs-2 font-weight" href="/nav">eMart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 font-size font-weight">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">Manage Inventory</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;