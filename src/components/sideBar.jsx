import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="h-screen bg-gray-200">
      <ul className="flex-row justify-center items-center p-10 text-lg font-semibold">
        <li className="py-4 px-1 hover:text-gray-400 w-2/4 flex justify-center items-center">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="py-4 px-1 hover:text-gray-400 w-2/4">
          <Link to="/list">List Stock</Link>
        </li>
        <li className="py-4 px-1 hover:text-gray-400 w-2/4">
          <Link to="/insert">Add Stock</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
