import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Dashboard = () => {
  const [stocks, setStocks] = useState({
    data: [],
  });

  useEffect(() => {
    getRequestHandler();
  }, []);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/stock");
    setStocks(response.data);
  };

  const history = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("loggedIn");
    history.push("/signin");
  };
  let totalUnits = 0;
  let totalInvestment = 0;
  let totalSoldAmount = 0;
  let currentValue = 0;
  stocks.data.forEach((element) => {
    totalUnits = totalUnits + element.quantity;
    totalInvestment = totalInvestment + element.investment;
    totalSoldAmount = totalSoldAmount + element.soldAmount;
  });
  currentValue = totalInvestment - totalSoldAmount;

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
              <td className="border border-gray-400 px-3">
                Total Units :
                <span className="font-bold text-lg"> {totalUnits}</span>
              </td>
              <td className="border border-gray-400 px-3">
                Total Investment :
                <span className="font-bold text-lg"> {totalInvestment}</span>
              </td>
            </tr>
            <tr>
              <td className=" px-3">
                Sold Amount :
                <span className="font-bold text-lg"> {totalSoldAmount}</span>
              </td>
              <td className="border border-gray-400 px-3">
                Current Amount :{" "}
                <span className="font-bold text-lg">{currentValue}</span>
              </td>
            </tr>
            {/* <tr>
              <td className="px-3">Overall Profit : </td>
            </tr> */}
          </tbody>
          {console.log(totalUnits)}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
