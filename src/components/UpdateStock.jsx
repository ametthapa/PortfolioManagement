import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const UpdateStock = (props) => {
  const stockId = props.match.params.stockId;
  let [stockName, setStockName] = useState("");
  let [transactionType, setTransactionType] = useState("");
  let [quantity, setQuantity] = useState("");
  let [amount, setAmount] = useState("");
  let [transactionDate, setTransactionDate] = useState("");
  let [stocks, setStocks] = useState({
    data: [],
  });
  let soldAmount = 0;
  let investment = 0;
  let buyAmount = 0;

  const history = useHistory();

  useEffect(() => {
    getRequestHandler();
  }, []);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/stock");
    setStocks(response.data);
  };

  stocks.data.forEach((element) => {
    if (element._id === stockId) {
      stockName = element.stockName;
      transactionType = element.transactionType;
      quantity = element.quantity;
      amount = element.amount;
      transactionDate = element.transactionDate;
    }
  });

  const postRequestHandler = async (e) => {
    e.preventDefault();
    if (transactionType === "Sell") {
      soldAmount = quantity * amount;
    } else if (transactionType === "Buy") {
      investment = quantity * amount;

      buyAmount = quantity * amount;
    }
    const data = {
      stockName,
      transactionType,
      quantity,
      amount,
      transactionDate,
      soldAmount,
      buyAmount,
      investment,
    };
    console.log(data);
    const response = await axios.patch(
      "http://localhost:4000/api/v1/update",
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
                <label>{stockName}</label>
                {/* <input
                  id="stockName"
                  value={stockName}
                  onChange={(e) => setStockName(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-white shadow p-1"
                  type="text"
                  required
                /> */}
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
              <div className="md:w-2/3">
                <select
                  id="transactionType"
                  name="transactionType"
                  defaultValue={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="form-input w-full text-gray-800 border rounded focus:outline-none shadow p-1"
                  required
                >
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div>
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
                  defaultValue={quantity}
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
                  defaultValue={amount}
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
                  defaultValue={transactionDate}
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
                  className="btn text-white bg-green-600 hover:bg-green-800 w-full p-2"
                  onClick={(e) => postRequestHandler(e)}
                >
                  Update Stock
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
