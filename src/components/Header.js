import styles from "../styles/Header.module.css";

function Header() {
  console.log(styles);
  return (
    <header className={styles.header}>
      <h1>Product management</h1>
      <button id="dataFetchBtn">Fetch Product Data</button>
    </header>
  );
}

export default Header;
