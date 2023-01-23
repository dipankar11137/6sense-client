import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product = ({ product, handleDelete, handleDetails }) => {
  const { _id, img, name, price, description, supplierName, date, quantity } =
    product;
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  const handleDetailsS = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <tbody>
      <tr className="text-center">
        <td className="">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-hexagon w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{description}</div>
            </div>
          </div>
        </td>

        <td className="bg-indigo-200">{price} BDT</td>
        <td className="bg-orange-100">{quantity}</td>
        <td className="bg-lime-100">{supplierName}</td>
        <td className="bg-rose-100">{date}</td>
        <td className="bg-sky-100">
          {" "}
          <button
            onClick={() => handleDetailsS(_id)}
            className="btn btn-sm btn-lime-500 hover:btn-warning text-white"
          >
            <FaInfo />
          </button>
        </td>
        <td
          onClick={() => handleUpdate(_id)}
          className="badge bg-slate-600 badge-outline p-4 btn text-white  font-bold mt-5"
        >
          <FaEdit className="" />
        </td>
        <th className="bg-fuchsia-200">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-lime-500 hover:btn-warning text-white"
          >
            <FaTrash />{" "}
          </button>
        </th>
      </tr>
      <hr />
    </tbody>
  );
};

export default Product;
