import styles from './navbar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){

    return(
        <nav className={styles.nav}>
        <div className={styles.navcontainer}>
            <h1>Dashboard</h1>
            <ul className={styles.nav__list}>
                <li><a className={styles.nav__item} href="/">Home</a></li>
                <li><a className={styles.nav__item} href="login">Login</a></li>
                <li><a className={styles.nav__item} href="register">Register</a></li>
                <li><a className={styles.nav__item} href="forgot-password">Forgot Password</a></li>
            </ul>
            <MenuIcon className={styles.hamburger__icon}/>
        </div>
    </nav>
    )
}