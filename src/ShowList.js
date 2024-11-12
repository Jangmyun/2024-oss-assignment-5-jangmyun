import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Modal from "./components/Modal";
import CardContainer from "./components/CardContainer";

function ShowList() {
  return (
    <div>
      <Header></Header>
      <ControlPanel></ControlPanel>
      <CardContainer></CardContainer>
      <Modal></Modal>
    </div>
  );
}

export default ShowList;
