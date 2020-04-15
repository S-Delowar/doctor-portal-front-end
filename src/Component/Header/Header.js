import React from 'react';

const Header = () => {
    return (
        <div style={{ marginTop:'20px'}}>
            <nav className="fixed-top container">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/reviews" >Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/doctor" >Doctor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog" >Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" >Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;