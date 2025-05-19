import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;