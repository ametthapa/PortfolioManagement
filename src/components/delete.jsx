import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Delete = (props) => {
  const stockId = props.match.params.stockId;
  console.log(stockId);
  const [message, setMessage] = useState(false);

  const history = useHistory();

  const deleteRequestHandler = async () => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/delete/${stockId}`
    );
    if (response.data.message) {
      setMessage(response.data.message);
      // history.goBack();
      window.location.href = "http://localhost:3000/list";
    }
  };

  deleteRequestHandler();
  return <div>Deletion in progress</div>;
};

export default Delete;
