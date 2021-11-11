import React from "react";

const Navbar = ({ openModal }) => {
  return (
    <div className="nav">
      <h1 style={{ fontSize: "2.5rem" }}>Contact App</h1>
      <button className="add-contact" onClick={openModal}>
        Add a Contact
      </button>
    </div>
  );
};

export default Navbar;
