import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserInput = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/addUser`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add User");
      });
    reset();
  };
  return (
    <div className="flex justify-center ">
      <div className=" w-96 bg-slate-200 rounded-lg shadow-2xl p-10 mt-7">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center">
            {/* {appleProduct?.name} */}
          </h1>
          <label className="label">
            <span className="label-text font-bold text-lime-700 text-2xl ml-20 uppercase">
              Add User
            </span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered bg-white w-full max-w-xs "
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.firstName?.type === "required" && (
              <span className="label-text-alt text-red-500 ">
                {errors?.firstName?.message}
              </span>
            )}
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered bg-white w-full max-w-xs "
            {...register("lastName", {
              required: {
                value: true,
                message: "Last is Required",
              },
            })}
          />
          <label className="label">
            {errors.lastName?.type === "required" && (
              <span className="label-text-alt text-red-500 ">
                {errors?.lastName?.message}
              </span>
            )}
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered bg-white w-full max-w-xs "
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500 ">
                {errors?.email?.message}
              </span>
            )}
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered bg-white w-full max-w-xs "
            {...register("phone", {
              required: {
                value: true,
                message: "Phone Number is Required",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500 ">
                {errors?.phone?.message}
              </span>
            )}
          </label>
          <input
            className="btn  w-full text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UserInput;
