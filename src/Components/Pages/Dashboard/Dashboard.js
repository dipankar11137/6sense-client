import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  // const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <h2 className="text-4xl bg-slate-900 text-lime-400 font-bold text-center mb-3 uppercase p-1">
              Welcome <span className="">to My</span> DashBoard
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ml-4">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
              <li>
                <Link
                  to="/dashboard"
                  className="font-bold hover:text-orange-600"
                >
                  Add Item
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageItem"
                  className="font-bold hover:text-orange-600"
                >
                  Manage Item
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
