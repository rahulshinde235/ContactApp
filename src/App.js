import "./App.css";
import { useState } from "react";
import FetchContacts from "./components/FetchContacts";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import NewContact from "./components/NewContact";
function App() {
  const [showModal, setshowModal] = useState(false);

  const closeModal = () => {
    setshowModal(false);
  };
  const openModal = () => {
    setshowModal(true);
  };

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      <FetchContacts />
      {showModal && (
        <Modal>
          <NewContact onClick={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
