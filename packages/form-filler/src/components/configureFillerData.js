import React, { useState } from 'react'
import ConfigureModal from './configureModal';
import ReactDOM from 'react-dom';

export default function ConfigureFillerData() {
  let [showConfigureModal, setConfigureModalState] = useState(false);

  function closeModalHandling() {
    setConfigureModalState(false);
  }

  return (
    <>
      <div role={'button'} onClick={() => setConfigureModalState(true)}>Configure</div>
      {showConfigureModal && ReactDOM.createPortal(
        <ConfigureModal
          closeModalHandling={closeModalHandling}
          showConfigureModal={showConfigureModal}
        />, document.querySelector('#filler-modal-wrapper'))}
    </>
  )
}