import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar-container">
            <div className="navbar">
                {/* ส่วนซ้าย: โลโก้และ hamburger menu */}
                <div className="navbar-left">
                    <button className="hamburger-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                    <Link to="/" className="logo">
                        <img src="/assets/logo.png" alt="Logo" />
                    </Link>
                </div>

                {/* ส่วนกลาง: ช่องค้นหา */}
                <div className="navbar-center">
                    <div className="search-box">
                        <input type="text" placeholder="ค้นหาสินค้า..." />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} size="lg" />
                        </button>
                    </div>
                </div>

                {/* เมนูสำหรับมือถือ */}
                {isMenuOpen && (
                    <div className="navbar-menu">
                        <ul>
                            <li><Link to="/installation">บริการติดตั้ง</Link></li>
                            <li><Link to="/service-repair">บริการซ่อมแซม</Link></li>
                            <li><Link to="/about-us">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>
                )}

                {/* ส่วนขวา: รถเข็นและผู้ใช้ */}
                <div className="navbar-right">
                    <Link to="/cart" className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Link>
                    <Link to="/login" className="user-icon">
                        <FontAwesomeIcon icon={faUser} size="lg" /> เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
            {/* เมนูรอง */}
            <nav className="secondary-menu">
                <Link to="/installation">บริการติดตั้ง</Link>
                <Link to="/repair">บริการซ่อมแซม</Link>
                <Link to="/about">เกี่ยวกับเรา</Link>
            </nav>
        </header>
    );
}

export default Navbar;
