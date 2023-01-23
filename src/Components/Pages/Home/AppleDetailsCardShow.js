import React from "react";

const AppleDetailsCardShow = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-3 pb-10">
      <div className="card w- bg-base-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            alt=""
            src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
            style={{ height: "200px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            I Pat
            <div className="badge badge-orange-700 ">New</div>
          </h2>
          <p className="text-xl">
            Price : <span className="text-orange-600 font-bold">$330</span>{" "}
          </p>
          <p></p>
          {/* <p>Quantity : {quantity}</p> */}
          {/* <p>Supplier Name : {supplierName}</p> */}
          <div className="flex justify-between">
            <div>
              <div className="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold top-0">
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
              <div className="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold ">
                ADD TO CARD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w- bg-base-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            alt=""
            src="https://i.ibb.co/b3Y79TF/airpot-1.jpg"
            style={{ height: "200px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            EarPot
            <div className="badge badge-orange-700 ">Up Coming</div>
          </h2>
          <p className="text-xl">
            Price : <span className="text-orange-600 font-bold">$230</span>{" "}
          </p>
          <p></p>
          {/* <p>Quantity : {quantity}</p> */}
          {/* <p>Supplier Name : {supplierName}</p> */}
          <div className="flex justify-between">
            <div>
              <div className="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold top-0">
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
              <div className="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold ">
                ADD TO CARD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w- bg-base-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            alt=""
            src="https://i.ibb.co/xm9xWkW/powerbank.jpg"
            style={{ height: "200px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Power Bank
            <div className="badge badge-orange-700 ">New</div>
          </h2>
          <p className="text-xl">
            Price : <span className="text-orange-600 font-bold">$70</span>{" "}
          </p>
          <p></p>
          {/* <p>Quantity : {quantity}</p> */}
          {/* <p>Supplier Name : {supplierName}</p> */}
          <div className="flex justify-between">
            <div>
              <div className="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold top-0">
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
              <div className="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold ">
                ADD TO CARD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w- bg-base-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            alt=""
            src="https://i.ibb.co/s9gY71s/watch-1.jpg"
            style={{ height: "200px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Watch
            <div className="badge badge-orange-700 ">Top</div>
          </h2>
          <p className="text-xl">
            Price : <span className="text-orange-600 font-bold">$550</span>{" "}
          </p>
          <p></p>
          {/* <p>Quantity : {quantity}</p> */}
          {/* <p>Supplier Name : {supplierName}</p> */}
          <div className="flex justify-between">
            <div>
              <div className="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold top-0">
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
              <div className="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold ">
                ADD TO CARD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleDetailsCardShow;
