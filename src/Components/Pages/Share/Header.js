import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  const navigator = useNavigate();
  // console.log(user.photoURL);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const myItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/appleBuyProductsEmail/${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    myItems();
  }, [user]);

  const handleBuyItem = () => {
    navigator("/myItems");
  };

  return (
    <div className="bg-slate-900 text-white py-2 px-6">
      <div className="flex justify-between">
        <div className="h-full items-center">
          <Link to="/">
            <h1 className=" sm: text-2xl lg:text-3xl font-bold text-lime-400 ">
              City
              <span className="text-orange-500 hover:text-lime-400">
                Crow
              </span>n{" "}
              <span className="font-extrabold hover:text-orange-500">
                Electr
              </span>
              onics
            </h1>
          </Link>
        </div>
        <div>
          <label tabindex="0" className="btn btn-ghost btn-circle mr-3">
            <div onClick={handleBuyItem} className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {items?.length}
              </span>
            </div>
          </label>
          {/* img  */}
          {user && (
            <div className="avatar online pr-2">
              <div className="w-7 rounded-full ">
                {user.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  // <h1>D</h1>
                  <img
                    src="https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg"
                    alt=""
                  />
                )}
              </div>
            </div>
          )}
          <button className="btn hover:text-white font-bold ml-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
