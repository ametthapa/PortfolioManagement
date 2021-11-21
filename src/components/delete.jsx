import { useState } from "react";
import axios from "axios";

const Delete = (props) => {
  const stockId = props.match.params.stockId;
  console.log(stockId);
  const [message, setMessage] = useState(false);

  const deleteRequestHandler = async (stockId) => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/stock/delete/${stockId}`
    );
    if (response.data.message) {
      setMessage(response.data.message);
    }
  };

  deleteRequestHandler();
  return;
};

export default Delete;
