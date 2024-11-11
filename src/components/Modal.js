import useModalStore from "../store/modalStore";
import modalStyles from "../styles/Modal.module.css";

function Modal() {
  const { isModalOpened, toggleModal } = useModalStore();

  if (!isModalOpened) return null;

  return (
    <div className={modalStyles.overlay} onClick={toggleModal}>
      <div className={modalStyles.container}></div>
    </div>
  );
}

export default Modal;
