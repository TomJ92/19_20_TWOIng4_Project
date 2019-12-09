import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

const AddUser = () => {
  return (
      <MDBRow>
        <MDBCol>
          <form>
            <p className="h4 text-center py-4">Enregistrer un nouvel utilisateur</p>

            <div className="grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>

              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>

              <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>

              <MDBInput label="Your password" icon="lock" group type="password" validate/>

            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Enregistrer
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
  );
};

export default AddUser;
