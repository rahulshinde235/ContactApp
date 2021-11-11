import React, { useRef, useState, useEffect } from "react";

const NewContact = ({ onClick }) => {
  let name = useRef();
  let username = useRef();
  let email = useRef();
  let mobile = useRef();
  let address = useRef();
  let companyName = useRef();
  let expertise = useRef();
  let domain = useRef();
  let website = useRef();

  const [newContact, setnewContact] = useState([]);

  const addContactHandler = (e) => {
    e.preventDefault();
    const newEnteredContact = {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      address: address.current.value,
      companyName: companyName.current.value,
      expertise: expertise.current.value,
      domain: domain.current.value,
      website: website.current.value,
    };
    setnewContact((prevState) => [...prevState, newEnteredContact]);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
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

    resetInput();
  };
  const resetInput = () => {
    name.current.value = "";
    username.current.value = "";
    email.current.value = "";
    mobile.current.value = "";
    address.current.value = "";
    expertise.current.value = "";
    domain.current.value = "";
    website.current.value = "";
  };
  useEffect(() => {
    console.log(newContact);
  }, [newContact]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Please Enter New Contact Details</h2>
      <form onSubmit={addContactHandler}>
        <div className="form-content">
          <label>Name:</label>
          <input type="text" ref={name} required />
        </div>
        <div className="form-content">
          <label>Username:</label>
          <input type="text" ref={username} required />
        </div>
        <div className="form-content">
          <label>Email:</label>
          <input type="email" ref={email} required />
        </div>
        <div className="form-content">
          <label>Mobile:</label>
          <input type="number" ref={mobile} required />
        </div>
        <div className="form-content">
          <label>Address:</label>
          <input type="text" ref={address} required />
        </div>
        <div className="form-content">
          <label>Company Name:</label>
          <input type="text" ref={companyName} required />
        </div>
        <div className="form-content">
          <label>Expertise:</label>
          <input type="text" ref={expertise} required />
        </div>
        <div className="form-content">
          <label>Domain:</label>
          <input type="text" ref={domain} required />
        </div>
        <div className="form-content">
          <label>Website:</label>
          <input type="text" ref={website} required />
        </div>
        <div className="btn-modal">
          <button onClick={onClick} type="button">
            Close
          </button>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </>
  );
};

export default NewContact;
