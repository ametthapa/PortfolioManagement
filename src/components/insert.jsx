import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Insert = () => {
  const [stockName, setStockName] = useState("");
  const [transactionType, setTransactionType] = useState("Buy");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const history = useHistory();

  const postRequestHandler = async (e) => {
    e.preventDefault();
    const data = {
      stockName,
      transactionType,
      quantity,
      amount,
      transactionDate,
    };
    const response = await axios.post(
      "http://localhost:4000/api/v1/insert",
      data
    );

    if (response.data.message) {
      alert("Data Inserted Successfully");
      history.push("/list");
    }
  };
  return (
    <div className=" h-screen p-10">
      <div className="w-2/4">
        <div className="text-left font-bold text-2xl mb-5">Add Stocks</div>
        <div className="max-w-lg mx-auto">
          <form id="insertForm">
            <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="stockName"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Stock Name <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="stockName"
                  value={stockName}
                  onChange={(e) => setStockName(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-white shadow p-1"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="transactionType"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Transaction Type
                  <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              {/* <div className="md:w-2/3">
                <input
                  id="stockName"
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-white shadow p-1"
                  type="text"
                  required
                />
              </div> */}
              <div className="md:w-2/3">
                <select
                  id="transactionType"
                  name="transactionType"
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  required
                >
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div>
            {/* <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="transactionType"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Transaction Type
                  <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  id="transactionType"
                  name="transactionType"
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  required
                >
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div> */}
            <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="quantity"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Share Quantity
                  <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="purchaseAmount"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Purchase Amount (Rs.)
                  <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="purchaseAmount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-4 w-full px-3">
              <div className="md:w-1/3">
                <label
                  htmlFor="transactionDate"
                  className="block text-gray-800 text-sm font-medium mb-1"
                >
                  Transaction Date
                  <span className="text-red-500 text-bold">*</span>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="transactionDate"
                  value={transactionDate}
                  onChange={(e) => setTransactionDate(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  type="date"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <button
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full p-2"
                  onClick={(e) => postRequestHandler(e)}
                >
                  Add Stock
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Insert;
