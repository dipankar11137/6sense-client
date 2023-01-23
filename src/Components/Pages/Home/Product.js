import React from "react";

const Product = ({ product }) => {
  const { img, name, price, description, supplierName, date, quantity } =
    product;
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
          <button className="btn btn-sm btn-info hover:btn-warning">
            Details
          </button>
        </td>
        <th className="bg-fuchsia-100">
          <button className="btn  btn-xs">Add </button>
        </th>
      </tr>
      <hr />
    </tbody>
  );
};

export default Product;
