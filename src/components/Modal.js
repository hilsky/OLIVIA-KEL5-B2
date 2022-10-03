import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalEx(props) {


  return (
    <>
      <Modal
        size="sm"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Mohon Maaf
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Untuk saat ini fitur belum tersedia</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEx;