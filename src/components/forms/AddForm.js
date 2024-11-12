import useModalStore from "../../store/modalStore";
import publicStyles from "../../styles/public.module.css";
import modalStyles from "../../styles/Modal.module.css";
import { useAddFormStore } from "../../store/inputFormStore";

function AddForm() {
  const { toggleModal } = useModalStore();
  const { addFormData, setAddFormData, resetAddFormData } = useAddFormStore();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddFormData(id, value);
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
      <form>
        <label htmlFor="p-name">Product Name</label>
        <input
          id="p_name"
          type="text"
          placeholder="Product Name"
          value={addFormData.p_name}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Price</label>
        <input
          type="number"
          id="p_price"
          placeholder="Product Price"
          value={addFormData.p_price}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Stock</label>
        <input
          type="number"
          id="p_stock"
          placeholder="Stock"
          value={addFormData.p_stock}
          onChange={handleChange}
        />
        <label htmlFor="p-price">Type</label>
        <select id="p_type" value={addFormData.p_type} onChange={handleChange}>
          <option value="desktop">Desktop</option>
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smart Phone</option>
          <option value="home-appliance">Home Appliance</option>
          <option value="audio-equipment">Audio Equipment</option>
        </select>
        <div className={modalStyles.submitBtnContainer}>
          <button
            className={publicStyles.button}
            onClick={() => {
              resetAddFormData();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
