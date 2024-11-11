import headerStyles from "../styles/Header.module.css";
import publicStyles from "../styles/public.module.css";

function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Product management</h1>
      <button className={publicStyles.button}>Fetch Product Data</button>
    </header>
  );
}

export default Header;
