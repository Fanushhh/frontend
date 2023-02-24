import styles from './navbar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }


    return(
        <nav className={styles.nav}>
        <div className={styles.navcontainer}>
            <h1>Dashboard</h1>
            <ul className={`${styles.nav__list} ${clicked ? styles.show : ''}`}>
                <li><Link className={styles.nav__item} to="/">Home</Link></li>
                <li><Link className={styles.nav__item} to="/login">Login</Link></li>
                <li><Link className={styles.nav__item} to="/register">Register</Link></li>
                <li><Link className={styles.nav__item} to="/forgot-password">Forgot Password</Link></li>
            </ul>
            <MenuIcon className={styles.hamburger__icon} onClick={handleClick}/>
        </div>
    </nav>
    )
}