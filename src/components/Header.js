import headerStyles from "../styles/Header.module.css";
import publicStyles from "../styles/public.module.css";
import axios from "axios";

function Header({ productData, setProductData }) {
  async function fetchProductData() {
    const { data } = await axios.get(
      "https://67283138270bd0b97554a078.mockapi.io/product-manage/device"
    );
    setProductData(data);
  }
  return (
    <header className={headerStyles.header}>
      <h1>Product management</h1>
      <button className={publicStyles.button} onClick={fetchProductData}>
        Fetch Product Data
      </button>
    </header>
  );
}

export default Header;
