import axios from "axios";
import { useUpdateFormStore } from "../store/inputFormStore";
import useModalStore from "../store/modalStore";
import cardStyles from "../styles/Card.module.css";
import publicStyles from "../styles/public.module.css";

function ProductCard({ id, name, price, stock, type }) {
  const { toggleModal, setModalOption } = useModalStore();
  const { setAllUpdateFormData } = useUpdateFormStore();

  const deleteProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `https://67283138270bd0b97554a078.mockapi.io/product-manage/device/${id}`
      );
      if (!res) throw Error("500");

      alert("Successfully Deleted!");
    } catch (error) {
      console.log(error);
      alert("Delete Failed!!");
    }
  };

  return (
    <div className={cardStyles.cardContainer}>
      <h1>{name}</h1>
      <h4>가격: {price}원</h4>
      <h4>수량: {stock}개</h4>
      <h4>유형: {type}</h4>
      <br />
      <div className={cardStyles.btnContainer}>
        <button
          className={publicStyles.button}
          onClick={() => {
            toggleModal();
            setModalOption(false);
            setAllUpdateFormData({
              u_id: id,
              u_name: name,
              u_price: price,
              u_stock: stock,
              u_type: type,
            });
          }}
        >
          Update
        </button>
        <button className={publicStyles.button} onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
