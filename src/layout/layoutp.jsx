import { Outlet } from "react-router-dom";
import Navbar from "../component/nav";

const Layoutpublic = () => {
  return (
    <div className="flex flex-nowrap">
      <Navbar className="mr-2" />
      <Outlet className="flex-1" />
    </div>
  );
};
export default Layoutpublic;
