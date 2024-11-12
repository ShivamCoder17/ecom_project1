import { Outlet } from "react-router-dom";
import ShoppingHeader from "./ShoppingHeader";

const ShoppingView = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader/>
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ShoppingView;
