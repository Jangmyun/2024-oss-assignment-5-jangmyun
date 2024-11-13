import axios from "axios";
import { useUpdateFormStore } from "../../store/inputFormStore";
import useModalStore from "../../store/modalStore";
import modalStyles from "../../styles/Modal.module.css";
import publicStyles from "../../styles/public.module.css";

function UpdateForm() {
  const { toggleModal } = useModalStore();
  const { updateFormData, setUpdateFormData } = useUpdateFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://67283138270bd0b97554a078.mockapi.io/product-manage/device/${updateFormData.u_id}`,
        {
          product_name: updateFormData.u_name,
          price: updateFormData.u_price,
          stock: updateFormData.u_stock,
          type: updateFormData.u_type,
        }
      );
      if (!res.status) {
        throw new Error("500");
      }
      alert("Successfully Updated!");
      toggleModal();
    } catch (error) {
      console.log(error);
      alert("Update Failed!!");
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
          }}
        >
          Close
        </button>
      </div>
      <h1 className={modalStyles.formTitle}>Update Product</h1>
      <form>
        <label htmlFor="u-id">ID</label>
        <input
          type="number"
          id="u-id"
          name="u-id"
          value={updateFormData.u_id}
          onChange={handleChange}
        />
        <label htmlFor="u-name">Product Name</label>
        <input
          id="u_name"
          name="u_name"
          type="text"
          placeholder="Product Name"
          value={updateFormData.u_name}
          onChange={handleChange}
        />
        <label htmlFor="u-price">Price</label>
        <input
          type="number"
          id="u_price"
          name="u_price"
          placeholder="Product Price"
          value={updateFormData.u_price}
          onChange={handleChange}
        />
        <label htmlFor="u-price">Stock</label>
        <input
          type="number"
          id="u_stock"
          name="u_stock"
          placeholder="Stock"
          value={updateFormData.u_stock}
          onChange={handleChange}
        />
        <label htmlFor="u-price">Type</label>
        <select
          id="u_type"
          name="u_type"
          value={updateFormData.u_type}
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
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateForm;
