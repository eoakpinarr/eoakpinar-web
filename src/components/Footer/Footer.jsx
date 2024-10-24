import React from 'react';
import { Link } from 'gatsby';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/hakkimda">Hakkımda</Link></li>
                    <li><Link to="/hizmetler">Hizmetler</Link></li>
                    <li><Link to="/iletisim">İletişim</Link></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Etem Oğulcan AKPINAR</p>
            </div>
        </footer>
    );
};

export default Footer;
