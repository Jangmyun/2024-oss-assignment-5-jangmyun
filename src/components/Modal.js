import useModalStore from "../store/modalStore";
import modalStyles from "../styles/Modal.module.css";
import AddForm from "./forms/AddForm";
import UpdateForm from "./forms/UpdateForm";

function Modal() {
  const { isModalOpened, toggleModal, modalOption } = useModalStore();

  if (!isModalOpened) return null;

  return (
    <div
      className={modalStyles.overlay}
      onClick={(e) => {
        toggleModal();
      }}
    >
      <div
        className={modalStyles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {modalOption ? <AddForm /> : <UpdateForm />}
      </div>
    </div>
  );
}

export default Modal;
