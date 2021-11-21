import { useState } from "react";
import axios from "axios";

const Delete = (props) => {
  const stockId = props.match.params.stockId;
  console.log(stockId);
  const [message, setMessage] = useState(false);

  const deleteRequestHandler = async () => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/delete/${stockId}`
    );
    if (response.data.message) {
      setMessage(response.data.message);
      props.navigation.goBack();
    }
  };

  deleteRequestHandler();
  return <div>Deletion in progress</div>;
};

export default Delete;
