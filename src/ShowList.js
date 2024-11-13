import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Modal from "./components/Modal";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function ShowList() {
  const [productData, setProductData] = useState({});
  return (
    <div>
      <Header
        productData={productData}
        setProductData={setProductData}
      ></Header>
      <ControlPanel></ControlPanel>
      <CardContainer
        productData={productData}
        setProductData={setProductData}
      ></CardContainer>
      <Modal></Modal>
    </div>
  );
}

export default ShowList;
