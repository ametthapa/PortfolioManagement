import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-200">
      <ul className="flex-row justify-center items-center p-10 text-lg font-semibold bg-red-600">
        <li className="py-4 px-1 bg-red-200 hover:text-blue-400">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="p-4">
          <Link to="/list">List</Link>
        </li>
        <li className="p-4">
          <Link to="/insert">Add</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
