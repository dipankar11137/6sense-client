import React from "react";

const ShowUser = (user, handleDetails, handleBlock, handleDelete) => {
  const { firstName, lastName } = user?.user;
  return (
    <tr>
      <td>
        {firstName}
        {lastName}
      </td>
      <td>
        <button className="pr-2 hover:underline">Details</button>
        <button className="pr-2 hover:underline">Block</button>
        <button className="hover:underline">Delete</button>
      </td>
    </tr>
  );
};

export default ShowUser;
