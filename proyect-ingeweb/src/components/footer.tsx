import React from 'react';
import './footer.css';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram, logoWhatsapp } from 'ionicons/icons';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <h2>Veterinaria PetMedic</h2>
            <p>Dirección: Calle Falsa 123, Ciudad</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Email: contacto@veterinariapetmedic.com</p>
            
            <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <IonIcon icon={logoFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <IonIcon icon={logoTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <IonIcon icon={logoInstagram} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <IonIcon icon={logoWhatsapp} />
            </a>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
