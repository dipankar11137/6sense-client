import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/appleProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/appleProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast.success("Successfully Remove");
        });
    }
  };
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <div className="grid justify-items-center">
        <div className="text-6xl font-extrabold mb-5 text-center">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 uppercase ">
            Our All Products
          </span>
        </div>
        <div className="card w-10/12 text-black">
          <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              <thead>
                <tr>
                  <th className="bg-red-600 text-white text-lg">Name</th>
                  <th className="bg-indigo-700 text-white text-lg">price</th>
                  <th className="bg-orange-600 text-white text-lg">Quantity</th>
                  <th className="bg-lime-700 text-white text-lg">
                    Supplier Name
                  </th>
                  <th className="bg-rose-700 text-white text-lg">Date</th>
                  <th className="bg-sky-500 text-white text-lg">Details</th>
                  <th className="bg-slate-500 text-white text-lg">Edit</th>
                  <th className="bg-red-700 text-white text-lg">
                    Delete Product
                  </th>
                </tr>
              </thead>
              {products.map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                  handleDetails={handleDetails}
                ></Product>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
