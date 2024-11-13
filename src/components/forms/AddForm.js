import useModalStore from "../../store/modalStore";
import publicStyles from "../../styles/public.module.css";
import modalStyles from "../../styles/Modal.module.css";
import { useAddFormStore } from "../../store/inputFormStore";
import axios from "axios";

function AddForm() {
  const { toggleModal, setModalOption } = useModalStore();
  const { addFormData, setAddFormData, resetAddFormData } = useAddFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://67283138270bd0b97554a078.mockapi.io/product-manage/device",
        {
          product_name: addFormData.p_name,
          price: addFormData.p_price,
          stock: addFormData.p_stock,
          type: addFormData.p_type,
        }
      );
      alert("Product is Added!");
      resetAddFormData();
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={modalStyles.modalHeader}>
        <h1 className={modalStyles.formTitle}>Add Product</h1>
        <button
          className={publicStyles.button}
          onClick={(e) => {
            e.stopPropagation();
            toggleModal();
            setModalOption(true);
          }}
        >
          Close
        </button>
      </div>
      <form>
        <label htmlFor="p-name">Product Name</label>
        <input
          id="p_name"
          name="p_name"
          type="text"
          placeholder="Product Name"
          value={addFormData.p_name}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Price</label>
        <input
          type="number"
          id="p_price"
          name="p_price"
          placeholder="Product Price"
          value={addFormData.p_price}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Stock</label>
        <input
          type="number"
          id="p_stock"
          name="p_stock"
          placeholder="Stock"
          value={addFormData.p_stock}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Type</label>
        <select
          id="p_type"
          name="p_type"
          value={addFormData.p_type}
          onChange={handleChange}
        >
          <option value="desktop">Desktop</option>
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smart Phone</option>
          <option value="home-appliance">Home Appliance</option>
          <option value="audio-equipment">Audio Equipment</option>
        </select>
        <div className={modalStyles.submitBtnContainer}>
          <button className={publicStyles.button} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
