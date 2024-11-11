import publicStyles from "../styles/public.module.css";
import controlPanelStyles from "../styles/ControlPanel.module.css";

function ControlPanel() {
  return (
    <div className={controlPanelStyles.controlPanel}>
      <button className={publicStyles.button}>Add</button>
      <button className={publicStyles.button}>Update</button>
    </div>
  );
}

export default ControlPanel;
