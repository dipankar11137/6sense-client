import React from "react";

const Tool = ({ tool }) => {
  const { name, img2, description } = tool;
  return (
    <div className="border sm:w-40 lg:w-56 shadow rounded image-full text-black bg-white hover:shadow-2xl hover:">
      <img className=" h-40 w-full rounded" src={img2} alt="" />

      <div className="flex justify-between mt-2 px-2 pb-2">
        <div>
          <h2 className="card font-bold">{name}</h2>
          <p>{description}</p>
        </div>
        <div className=" ">
          <button className="btn ">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
