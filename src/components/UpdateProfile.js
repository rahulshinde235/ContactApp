import React, { useRef } from "react";
import Modal from "../components/Modal";
import "./UpdateProfile.css";
const UpdateProfile = ({ objNum, users, modalHandler }) => {
  let name = useRef();
  let username = useRef();
  let email = useRef();
  let mobile = useRef();
  let address = useRef();
  let companyName = useRef();
  let expertise = useRef();
  let domain = useRef();
  let website = useRef();

  name = users[objNum - 1].name;
  username = users[objNum - 1].username;
  email = users[objNum - 1].email;
  mobile = users[objNum - 1].phone;
  address = users[objNum - 1].address.street;
  companyName = users[objNum - 1].company.name;
  expertise = users[objNum - 1].company.catchPhrase;
  domain = users[objNum - 1].company.bs;
  website = users[objNum - 1].website;

  const addContactHandler = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${objNum}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("Profile Updated");
  };
  return (
    <Modal>
      <h2>Enter Updated Details</h2>
      <div>
        <form onSubmit={addContactHandler}>
          <div className="form-content">
            <label>Name:</label>
            <input type="text" placeholder={name} />
          </div>
          <div className="form-content">
            <label>Username:</label>
            <input type="text" placeholder={username} />
          </div>
          <div className="form-content">
            <label>Email:</label>
            <input type="email" placeholder={email} />
          </div>
          <div className="form-content">
            <label>Mobile:</label>
            <input type="text" placeholder={mobile} />
          </div>
          <div className="form-content">
            <label>Address:</label>
            <input type="text" placeholder={address} />
          </div>
          <div className="form-content">
            <label>Company Name:</label>
            <input type="text" placeholder={companyName} />
          </div>
          <div className="form-content">
            <label>Expertise:</label>
            <input type="text" placeholder={expertise} />
          </div>
          <div className="form-content">
            <label>Domain:</label>
            <input type="text" placeholder={domain} />
          </div>
          <div className="form-content">
            <label>Website:</label>
            <input type="text" placeholder={website} />
          </div>
          <div className="btn-modal">
            <button onClick={modalHandler} type="button">
              Close
            </button>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateProfile;
