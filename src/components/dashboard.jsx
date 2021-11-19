import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [request, setRequest] = useState();
  const [stocks, setStocks] = useState();

  useEffect(() => {
    getRequestHandler();
  }, []);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/stock");
    setStocks(response.data);
    setRequest("GET");
  };

  // console.log(stocks.data);

  return (
    <div className=" h-screen p-10">
      <table className="border-collapse border border-gray-400 w-2/4 h-1/3">
        <tbody>
          <tr>
            <th className="">Dashboard</th>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3">Total Units : </td>
            <td className="border border-gray-400 px-3">Total Investment : </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-3">Sold Amount : </td>
            <td className="border border-gray-400 px-3">Current Amount : </td>
          </tr>
          <tr>
            <td className="px-3">Overall Profit : </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
