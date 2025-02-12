import React from 'react';
import { FaHome, FaSearch, FaPlusCircle, FaBell, FaUser } from 'react-icons/fa';

const Nav: React.FC = () => {
    return (
        
        <nav style={Styles.nav}>
            <ul style={Styles.navList}>
                <li style={Styles.navItem}>
                    <a href="/" style={Styles.navLink}>
                        <FaHome style={Styles.icon} />
                        Home
                    </a>
                </li>
                <li style={Styles.navItem}>
                    <a href="/search" style={Styles.navLink}>
                        <FaSearch style={Styles.icon} />
                        Search
                    </a>
                </li>
                <li style={Styles.navItem}>
                    <a href="/add" style={Styles.navLink}>
                        <FaPlusCircle style={Styles.icon} />
                        Add
                    </a>
                </li>
                <li style={Styles.navItem}>
                    <a href="/alerts" style={Styles.navLink}>
                        <FaBell style={Styles.icon} />
                        Alerts
                    </a>
                </li>
                <li style={Styles.navItem}>
                    <a href="/profile" style={Styles.navLink}>
                        <FaUser style={Styles.icon} />
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
        
    );
};

export default Nav;

const Styles: { [key: string]: React.CSSProperties } = {
    nav: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', // Sombra superior
        borderTop: '1px solid #ddd',
    },
    navList: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        padding: 0,
        margin: 0,
    },
    navItem: {
        listStyle: 'none',
        flex: 1,  // Para que cada item ocupe el mismo espacio
        textAlign: 'center',
    },
    navLink: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',  // Espacio entre icono y texto
    },
    icon: {
        fontSize: '24px',
    }
};
