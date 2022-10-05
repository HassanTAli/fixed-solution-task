import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`p-15 bg-light`}>
      <h1 className={`${styles.header} m-0`}>Posty</h1>
    </nav>
  );
};

export default Navbar;
