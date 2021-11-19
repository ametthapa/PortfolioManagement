import { useState, useEffect } from "react";
import axios from "axios";

const Delete = (props) => {
  const stockId = props.match.params.stockId;
  console.log(stockId);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    deleteRequestHandler();
  }, []);

  const deleteRequestHandler = async (stockId) => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/stock/delete/${stockId}`
    );
    if (response.data.message) {
      setMessage(response.data.message);
    }
  };
  return (window.location.href = "http://localhost:3000/list");
};

export default Delete;
