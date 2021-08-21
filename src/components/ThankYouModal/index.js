import React, { useState } from 'react';
import { Modal } from "../context/Modal";
import {ThankYou} from "./thankYou";
import "./Modal.css"

function ThankYouModal({name}) {
  const [showModal, setShowModal] = useState(false);

  return (
    < >


      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ThankYou
            name={name}
            hideForm={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default ThankYouModal;
