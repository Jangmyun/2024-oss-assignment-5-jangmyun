import useModalStore from "../../store/modalStore";
import publicStyles from "../../styles/public.module.css";
import modalStyles from "../../styles/Modal.module.css";
import { useAddFormStore } from "../../store/inputFormStore";

function AddForm() {
  const { toggleModal } = useModalStore();
  const { addFormData, setAddFormData, resetAddFormData } = useAddFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        <input type="text" name="p-name" placeholder="Product Name" />
        <input type="number" name="p-price" placeholder="Product Price" />
        <input type="number" name="p-stock" placeholder="Stock" />
        <select name="p-type" id="p-type">
          <option value="desktop">Desktop</option>
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smart Phone</option>
          <option value="home-appliance">Home Appliance</option>
          <option value="audio-equipment">Audio Equipment</option>
        </select>
        <div className={modalStyles.submitBtnContainer}>
          <button className={publicStyles.button}>Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
