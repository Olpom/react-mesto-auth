import React from 'react';

// устанавливаем автоматическое изменение даты с помощью экземпляра Date и его метода
const currentYear = new Date().getFullYear();

function Footer({loggedIn}) {
    return (
        <footer className={loggedIn ? 'footer' : 'footer_disable'}>
            <p className="footer__copyright">&copy; {currentYear} Mesto Russia</p>
        </footer>
    )
}

export default Footer;