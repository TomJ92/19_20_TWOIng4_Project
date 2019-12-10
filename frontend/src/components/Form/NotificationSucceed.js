import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        autohide={3000} // by default = ∞ ms
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 0
        }}
        bodyClassName="p-5 font-weight-bold white-text"
        className="stylish-color-dark"
        closeClassName="blue-grey-text"
        fade
        icon="bell"
        iconClassName="blue-grey-text"
        message="Votre requête a fonctionné !"
        show
        text="à l'instant"
        title="Félicitation !"
        titleClassName="elegant-color-dark white-text"
      />
    );
  }
}

export default Notification;
