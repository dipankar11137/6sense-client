import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import AppleDetailsCardShow from "./AppleDetailsCardShow";

const AppleProductAddToCard = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [appleProduct, setAppleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appleProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setAppleProduct(data));
  }, [appleProduct]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    const updateData = { ...data, email, appleProduct };
    // console.log(updateData);
    // console.log(data);
    const url = `http://localhost:5000/appleBuyProducts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add This Products");
        reset();
        navigate("/");
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-3 uppercase text-purple-700 font-bold">
        Please Add Products
      </h1>

      <div className="flex justify-center">
        <div className="flex">
          <div>
            <img
              className="h-96 w-11/12 rounded-xl mt-4"
              src={appleProduct.img}
              alt=""
            />
          </div>
          <div className="bg-green-100 p-5 rounded-2xl w-96 mt-2 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-bold text-center">
                {appleProduct?.name}
              </h1>
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Your Quantity"
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.quantity?.message}
                  </span>
                )}
              </label>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="phone"
                placeholder="Enter Your Phone Number"
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>

              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.address?.message}
                  </span>
                )}
              </label>

              <input
                className="btn  w-full text-white"
                type="submit"
                value="Buy"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <AppleDetailsCardShow />
      </div>
    </div>
  );
};

export default AppleProductAddToCard;
