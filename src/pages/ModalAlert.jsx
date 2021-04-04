import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

const ModalAlert = (props) => {
  return (
    <div className="ModalAlert">
      <div className="foreground"></div>
      <div className="mainAlert">
        <Alert
          className="text-left"
          onClose={props.showAlert}
          dismissible
        >
          <Alert.Heading className="Header">{props.header}</Alert.Heading>
          <p className="Body">{props.message}</p>
        </Alert>
      </div>
    </div>
  );
}

export default ModalAlert
