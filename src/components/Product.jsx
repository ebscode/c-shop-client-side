/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Product = ({ loader, coffee, setvisible }) => {
  // const loader=useLoaderData();

  // const [users,setUser]=useState(loader)

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`https://coffee-store-server-five-delta.vercel.app/coffee/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaing = coffee.filter((use) => use._id !== _id);
          setvisible(remaing);
          alert("data deleted");

          console.log(data);
        }
      });
  };
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={loader.photoUrl} className="h-full w-full object-cover" />
        </div>
        <div className="flex w-2/3 mt-2 ml-4 bg-white  space-x-2  divide-x rounded-lg rtl:flex-row-reverse  ">
          <button className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md transition-colors duration-200 sm:text-base sm:px-6  ">
            view
          </button>

          <Link to={`/updatecoffee/${loader._id}`}>
            <button className="px-4 py-2 text-sm font-medium bg-rose-600 text-white rounded-md  transition-colors duration-200 sm:text-base sm:px-6 ">
              edit
            </button>
          </Link>

          <button
            onClick={() => handleDelete(loader._id)}
            className="px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded-md  transition-colors duration-200 sm:text-base sm:px-6 "
          >
            close
          </button>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {loader.coffee}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              quantity : {loader.quantity}
            </p>
          </div>
          <p>
            <span className="font-semibold">taste :</span> {loader.taste}
          </p>
          <p>{loader.supplier}</p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {loader.details}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
