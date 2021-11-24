import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const SingleStock = (props) => {
  const stockId = props.match.params.stockId;
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

  let stockName = 0;
  let totalUnits = 0;
  let totalInvestment = 0;
  let totalSoldAmount = 0;
  let currentValue = 0;
  let currentUnit = 0;
  let soldUnit = 0;
  stocks.data.forEach((element) => {
    if (element.stockName === stockId) {
      stockName = element.stockName;
      totalUnits = totalUnits + element.quantity;
      totalInvestment = totalInvestment + element.investment;
      totalSoldAmount = totalSoldAmount + element.soldAmount;
      if (element.transactionType === "Buy") {
        currentUnit = currentUnit + element.quantity;
      } else if (element.transactionType === "Sell") {
        soldUnit = soldUnit + element.quantity;
      }
    }
  });
  currentValue = totalInvestment - totalSoldAmount;

  return (
    <>
      <div className=" h-screen p-10">
        <table className="border-collapse border border-gray-400 w-2/4 h-1/3">
          <tbody>
            <tr>
              <th className="uppercase text-2xl">{stockName}</th>
            </tr>
            <tr>
              <td className="border border-gray-400 px-3">
                Current Units :
                <span className="font-bold text-lg"> {currentUnit}</span>
              </td>
              <td className="border border-gray-400 px-3">
                Sold Units :
                <span className="font-bold text-lg"> {soldUnit}</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-3">
                Investment :
                <span className="font-bold text-lg"> {totalInvestment}</span>
              </td>
              <td className="border border-gray-400 px-3">
                Sold Amount :
                <span className="font-bold text-lg"> {totalSoldAmount}</span>
              </td>
            </tr>
            <tr>
              <td className="px-3">
                Current Amount :
                <span className="font-bold text-lg">{currentValue}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleStock;
