import React from "react";

const ComputerAccessor = ({ computerAccessor }) => {
  const { img3, name, price, status } = computerAccessor;
  return (
    <div className="card lg:w-52 bg-base-100 shadow-xl mt-5 hover:shadow-inner hover:border-1 ">
      <figure>
        <img
          className="w-full h-40	hover:animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite hover:animate-pulse"
          src={img3}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h1 className="text-orange-500 text-xl font-bold">$ {price}</h1>
      </div>
    </div>
  );
};

export default ComputerAccessor;
