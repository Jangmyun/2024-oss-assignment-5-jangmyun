import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import cardStyles from "../styles/Card.module.css";

function CardContainer() {
  const [productData, setProductData] = useState({});

  async function fetchProductData() {
    const { data } = await axios.get(
      "https://67283138270bd0b97554a078.mockapi.io/product-manage/device"
    );
    setProductData(data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className={cardStyles.container}>
      {productData && productData.length > 0
        ? productData.map((item, index) => {
            return (
              <ProductCard
                key={item.product_name + index}
                id={item.id}
                name={item.product_name}
                price={item.price}
                stock={item.stock}
                type={item.type}
              ></ProductCard>
            );
          })
        : null}
    </div>
  );
}

export default CardContainer;
