import cardStyles from "../styles/Card.module.css";
import publicStyles from "../styles/public.module.css";

function ProductCard({ name, price, stock, type }) {
  return (
    <div className={cardStyles.cardContainer}>
      <h1>{name}</h1>
      <h4>가격: {price}원</h4>
      <h4>수량: {stock}개</h4>
      <h4>유형: {type}</h4>
      <br />
      <div className={cardStyles.btnContainer}>
        <button className={publicStyles.button}>Update</button>
        <button className={publicStyles.button}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
