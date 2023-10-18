import { useLoaderData } from "react-router-dom";

const Updatecoffee = () => {
  const tro = useLoaderData();
  const {
    _id,
    coffee,
    quantity,
    supplier,
    category,
    taste,
    photoUrl,
    details,
  } = tro;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffee = form.coffee.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    //    console.log(coffee,quantity,supplier,category,taste,photoUrl,details)
    const updateCoffee = {
      coffee,
      quantity,
      supplier,
      category,
      taste,
      photoUrl,
      details,
    };

    fetch(`https://coffee-store-server-five-delta.vercel.app/coffee/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("coffee  added ");
        console.log(data);
      });
  };
  // console.log(tro)
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className=" rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-none">
          <form
            onSubmit={handleUpdateCoffee}
            className="mt-8 mb-2 w-80 max-w-screen-lg  sm:w-auto"
          >
            <div className="mb-4  grid grid-cols-1  md:grid-cols-2 gap-6  p-4">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={coffee}
                  className="peer bg-white h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" add coffee "
                  name="coffee"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={quantity}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" available quantity"
                  name="quantity"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={supplier}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" supplier"
                  name="supplier"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={taste}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" taste"
                  name="taste"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={category}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" category"
                  name="category"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={details}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" details"
                  name="details"
                />
              </div>

              <div className="relative h-11 w-full col-span-2 min-w-full">
                <input
                  defaultValue={photoUrl}
                  className="peer h-full bg-white w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" photo"
                  name="photoUrl"
                />
              </div>
            </div>

            <button
              className="mt-6 block w-full select-none rounded-lg bg-sky-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              {/* <input type="submit" value="    
" /> */}
              update coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatecoffee;
