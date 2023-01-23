import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowUser from "./ShowUser";

const ShowUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/showUser")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleDetails = () => {};
  const handleBlock = () => {};
  const handleDelete = () => {};
  return (
    <div className="flex justify-center mt-7 pb-10">
      <div className="w-6/12">
        <table className="table w-full text-black">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ShowUser
                key={user._id}
                user={user}
                handleDetails={handleDetails}
                handleBlock={handleBlock}
                handleDelete={handleDelete}
              ></ShowUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUsers;
