const List = () => {
  return (
    <div className=" h-screen p-10">
      <div className="font-bold text-2xl text-gray-700 pb-5">All Stocks</div>
      <table className="border-collapse border border-gray-400 table-auto">
        <tr>
          <th className="border border-gray-400 p-3">S_N.</th>
          <th className="border border-gray-400 p-3">Stock Name</th>
          <th className="border border-gray-400 p-3">TransactionType</th>
          <th className="border border-gray-400 p-3">Quantity</th>
          <th className="border border-gray-400 p-3">Amount</th>
          <th className="border border-gray-400 p-3">TransactionDate</th>
        </tr>
      </table>
    </div>
  );
};

export default List;
