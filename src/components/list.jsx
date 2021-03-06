import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const List = () => {
  const [request, setRequest] = useState();
  const [stocks, setStocks] = useState({
    data: [],
  });

  useEffect(() => {
    getRequestHandler();
  }, []);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/stock");
    setStocks(response.data);
    // console.log(response.data);
    setRequest("GET");
  };
  // getRequestHandler();

  // console.log(stocks);
  let i = 0;
  return (
    <div className=" h-screen p-10">
      <div className="font-bold text-2xl text-gray-700 pb-5">All Stocks</div>
      <table className="border-collapse border border-gray-400 table-auto">
        <tbody>
          <tr>
            <th className="border border-gray-400 p-3">S_N.</th>
            <th className="border border-gray-400 p-3">Stock Name</th>
            <th className="border border-gray-400 p-3">TransactionType</th>
            <th className="border border-gray-400 p-3">Quantity</th>
            <th className="border border-gray-400 p-3">Amount</th>
            <th className="border border-gray-400 p-3">TransactionDate</th>
            <th className="border border-gray-400 p-3">Option</th>
          </tr>
          {stocks.data.map((stock) => {
            return (
              <tr key={stock._id}>
                <td className="border border-gray-400 p-1">{(i = i + 1)}</td>
                <td className="border border-gray-400 p-1">
                  <Link to={`/single/${stock.stockName}`}>
                    <button className="btn text-green-600 hover:text-green-800 font-bold uppercase">
                      {stock.stockName}
                    </button>
                  </Link>
                </td>
                <td className="border border-gray-400 p-1">
                  {stock.transactionType}
                </td>
                <td className="border border-gray-400 p-1">{stock.quantity}</td>
                <td className="border border-gray-400 p-1">{stock.amount}</td>
                <td className="border border-gray-400 p-1">
                  {stock.transactionDate}
                </td>
                <td className="border border-gray-400 p-1 px-5 ">
                  <Link to={`/update/${stock._id}`}>
                    <button className="btn text-blue-600 hover:text-blue-800 hover:font-bold">
                      Update
                    </button>
                  </Link>{" "}
                  /{" "}
                  <Link to={`/delete/${stock._id}`}>
                    <button className="btn text-red-600 hover:text-red-800 hover:font-bold">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col justify-end text-red-700">
        <span className="text-sm italic font-semibold text-center">
          Note : Click on stock name to see full detail
        </span>
      </div>
    </div>
  );
};

export default List;
