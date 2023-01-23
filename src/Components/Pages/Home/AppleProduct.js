import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../../CSS/PicStyle.css";

const AppleProduct = ({ appleProduct }) => {
  const { _id, img, name, price, description, status } = appleProduct;
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  const handleAddCard = (id) => {
    navigate(`/addToCard/${id}`);
  };
  return (
    // <AnimationOnScroll animateIn="animate__bounceIn" duration={5}>
    <div className="card w- bg-base-100 text-black shadow-2xl hover:shadow-inner">
      <figure>
        <img
          className="w-full pic-style"
          src={img}
          alt="Shoes"
          style={{ height: "200px" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-orange-700 ">{status}</div>
        </h2>
        <p className="text-xl">
          Price : <span className="text-orange-600 font-bold">${price}</span>{" "}
        </p>
        <p>{description}</p>
        {/* <p>Quantity : {quantity}</p> */}
        {/* <p>Supplier Name : {supplierName}</p> */}
        <div className="flex justify-between">
          <div>
            <div
              onClick={() => handleDetails(_id)}
              className="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold top-0"
            >
              Details
            </div>
            {/* <div
              onClick={() => handleUpdate(_id)}
              className="badge bg-slate-600 badge-outline p-4 btn text-white  font-bold "
            >
              <FaEdit />
            </div> */}
          </div>
          <div>
            <div
              onClick={() => handleAddCard(_id)}
              className="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold "
            >
              ADD TO CARD
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AnimationOnScroll>
  );
};

export default AppleProduct;
