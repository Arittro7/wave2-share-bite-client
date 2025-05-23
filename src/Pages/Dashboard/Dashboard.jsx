import { Outlet } from "react-router-dom";
import Sidebar from "./Dashbar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-5 p-5">
      <div className="w-[200px]"><Sidebar></Sidebar></div>
      <div><Outlet></Outlet></div>
    </div>
  );
};

export default Dashboard;