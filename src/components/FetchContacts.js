import React, { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";

const FetchContacts = () => {
  const [users, setUsers] = useState(null);
  const [profileUpdated, setprofileUpdated] = useState(false);
  const [objNum, setobjNum] = useState(null);
  const [fetchedArray, setfetchedArray] = useState();
  const closeProfileUpdateModal = () => {
    setprofileUpdated(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setfetchedArray(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  const updateProfileHandler = (e) => {
    setprofileUpdated(true);
    setobjNum(e.target.value);
  };
  const deleteProfileHandler = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
      method: "DELETE",
    });
    console.log("Profile Deleted ");
  };
  return (
    <div>
      {users ? (
        users.map((item) => (
          <div className="container" key={item.id}>
            <div className="card">
              <div className="inner-card">
                <p>
                  <span>Name</span> : {item.name}
                </p>
                <p>
                  <span>Username</span>: {item.username}
                </p>
                <p>
                  <span>Email</span>: {item.email}
                </p>
                <p>
                  <span>Mobile</span>:{item.phone}
                </p>
                <p>
                  <span>Address</span>: {item.address.street}{" "}
                  {item.address.suite} {item.address.zipcode}
                </p>
                <p>
                  <span>Latitude</span>: {item.address.geo.lat}
                </p>
                <p>
                  <span>Longitude</span>: {item.address.geo.lng}
                </p>
              </div>
              <div className="company-info">
                <p>
                  <span>Company Name</span>: {item.company.name}
                </p>
                <p>
                  <span>Expertise</span>: {item.company.catchPhrase}
                </p>
                <p>
                  <span>Domain</span>: {item.company.bs}
                </p>
                {/* <p>
                  <span>phone</span>": "1-770-736-8031 x56442"
                </p> */}
                <p>
                  <span>Website</span>: {item.website}
                </p>
              </div>
            </div>

            <div className="btn">
              <button value={item.id} onClick={updateProfileHandler}>
                Update Profile
              </button>
              <button value={item.id} onClick={deleteProfileHandler}>
                Delete Profile
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading Data....</p>
      )}

      {profileUpdated && (
        <UpdateProfile
          objNum={objNum}
          users={fetchedArray}
          modalHandler={closeProfileUpdateModal}
        />
      )}
    </div>
  );
};

export default FetchContacts;
