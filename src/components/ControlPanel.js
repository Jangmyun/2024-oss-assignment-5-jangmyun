import publicStyles from "../styles/public.module.css";
import controlPanelStyles from "../styles/ControlPanel.module.css";
import useModalStore from "../store/modalStore";

function ControlPanel() {
  const { toggleModal, setModalOption } = useModalStore();

  return (
    <div className={controlPanelStyles.controlPanel}>
      <button
        className={publicStyles.button}
        onClick={() => {
          toggleModal();
          setModalOption(true);
        }}
      >
        Add
      </button>
      <button
        className={publicStyles.button}
        onClick={() => {
          toggleModal();
          setModalOption(false);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default ControlPanel;
