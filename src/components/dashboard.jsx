import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Dashboard = () => {
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
    setRequest("GET");
  };

  const history = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("loggedIn");
    history.push("/signin");
  };
  let totalUnits = 0;
  return (
    <>
      <button
        type="button"
        className="absolute right-3 top-3 sm:right-5 sm:top-5 p-2 sm:p-3 sm:font-semibold bg-red-600 text-white rounded-md"
        onClick={() => logOut()}
      >
        Log Out
      </button>
      <div className=" h-screen p-10">
        <table className="border-collapse border border-gray-400 w-2/4 h-1/3">
          <tbody>
            <tr>
              <th className="">Dashboard</th>
            </tr>
            <tr>
              <td className="border border-gray-400 px-3">Total Units : </td>
              <td className="border border-gray-400 px-3">
                Total Investment :
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-3">Sold Amount : </td>
              <td className="border border-gray-400 px-3">Current Amount : </td>
            </tr>
            <tr>
              <td className="px-3">Overall Profit : </td>
            </tr>
          </tbody>
          {console.log(totalUnits)}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
