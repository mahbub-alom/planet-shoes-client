import { CiEdit } from "react-icons/ci";
import { FaHome, FaRegPlusSquare, FaUsers } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open SideBar</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="text-xl font-semibold text-fuchsia-500">
                            <NavLink to="/dashboard/userInfo">
                                <FaUsers />
                                User info
                            </NavLink>
                        </li>
                        <li className="text-xl font-semibold text-fuchsia-500">
                            <NavLink to="/dashboard/addproduct">
                                <IoAddCircleSharp />
                                Add Products
                            </NavLink>
                        </li>
                        <li className="text-xl font-semibold text-fuchsia-500">
                            <NavLink to="/dashboard/myproduct">
                                <FaRegPlusSquare />
                                My Products
                            </NavLink>
                        </li>
                        <li className="text-xl font-semibold text-fuchsia-500">
                            <NavLink to="/dashboard/updateproduct">
                                <CiEdit />
                                Update Product
                            </NavLink>
                        </li>
                        <div className="divider"></div>
                        <li className="text-xl font-semibold text-fuchsia-500">
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;