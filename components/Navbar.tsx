
import styles from './Navbar.module.css';
import { ActiveLink } from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {

    return (
        // Los links solo se pueden estilizar mediante modulos con clases
        <>
        {/* Para utilizar las clases con un guion bajo u otro caracter, se utilizan las llaves */}
            <nav className={ styles['menu-container'] }>
                {
                    menuItems.map( ({ text, href }) => (
                        <ActiveLink key={ href } text={ text }  href={ href }/>
                    ))
                }
                {/* <ActiveLink text="Home" href="/" />
                <ActiveLink text="About" href="/about" />
                <ActiveLink text="Contact" href="/contact" />
                <ActiveLink text="Pricing" href="/pricing" /> */}
            </nav>
        </>
    )
}; 