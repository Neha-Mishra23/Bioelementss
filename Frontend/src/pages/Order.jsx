import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-whit shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You For Your Order!</h1>
          <p className="text-gray-600 mt-2">
            {" "}
            Here are the details of your recent orders.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold m-4">Order #1</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2"> Items Ordered</h3>

              <div className="flex flex-col">
                <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                  <img
                    src="logo.png"
                    alt=""
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">Product Name</h4>
                    <p className="text-gray-600">2</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold"></p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="my-3"> Rate this Products</h3>
                  <StarRatings
                    rating={2.043}
                    starDimension="25"
                    starRatedColor="orange"
                    starSpacing="5px"
                  />

                  <textarea
                    name=""
                    id=""
                    placeholder="leave a message"
                    className="p-[10px] w-[300px] mt-3"
                  ></textarea>

                  <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                    Submit
                  </button>
                </div>
              </div>

              {/* 2nd item */}

              <div className="mb-8">
                <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                  <img
                    src="logo.png"
                    alt=""
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">Product Name</h4>
                    <p className="text-gray-600">2</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold"></p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="my-3"> Rate this Products</h3>
                  <StarRatings
                    rating={2.043}
                    starDimension="25"
                    starRatedColor="orange"
                    starSpacing="5px"
                  />

                  <textarea
                    name=""
                    id=""
                    placeholder="leave a message"
                    className="p-[10px] w-[300px] mt-3"
                  ></textarea>

                  <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
        <p className="text-gray-600">nehashukla397@gmail.com</p>
        <p className="text-gray-600"> (656) 789 254 </p>
        <p className="text-gray-600">Neha Mishra</p>
      </div>

      <div className="bg-gray-50 rounded-lg m-2">
        <h3 className="text-xl font-semibold mb-2"> Payment method</h3>
        <p className="text-gray-600">VISA</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Order Summery</h3>
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Subtotal: </span>
          <span className="text-lg font-semibold">$100</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Shipping : </span>
          <span className="text-lg font-semibold">$720</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Total: </span>
          <span className="text-lg font-semibold">$830</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold">
          {" "}
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
