import { Outlet } from "react-router-dom";
import Navbar from "../component/nav";

const Layoutpublic = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};
export default Layoutpublic;
