import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <h2>À propos de moi</h2>
                    <p>Passionné par les technologies web et les interfaces utilisateur (et les mnémoniques), mon objectif est de créer des expériences utilisateur intuitives et esthétiques.</p>
                </div>
                <div className="footer-right">
                    <h2>Contact</h2>
                    <p>Email: contact.tiantsoa@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Tiantsoa. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
