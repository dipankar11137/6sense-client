import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="sm:mb-2 sm:p-0 lg:mb-6 lg:p-6  bg-stone-200 mx-8 rounded-lg my-6">
      <div className="lg:text-5xl  text-center font-extrabold mb-5">
        <h1 className="text-lime-700 text-center text-5xl font-bold p-3">
          Smart Phone <span className="text-lime-700">Accessories</span>
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-0 lg:gap-4 ">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
