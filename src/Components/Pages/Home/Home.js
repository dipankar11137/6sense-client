import React from "react";
import Footer from "../Share/Footer";
import UserInput from "../Task6sense/UserInput";
import AppleProducts from "./AppleProducts";
import Banner from "./Banner";
import ComputerAccessories from "./ComputerAccessories";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="bg-slate-300 text-white">
      <div className="mx-7">{/* <Banner /> */}</div>
      {/* <AppleProducts /> */}
      {/* <ComputerAccessories /> */}
      {/* <Tools /> */}
      {/* <Reviews /> */}
      {/* <Footer /> */}

      {/* Task */}
      <UserInput />
    </div>
  );
};

export default Home;
