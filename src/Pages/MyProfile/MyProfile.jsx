import proBnr from "../../assets/copy.png";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useAuth() || {};
  const [isLoading] = useRole();
  const axiosSecure = useAxiosSecure();

  return (
    <div className="flex border-2 border-black justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src={proBnr}
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>
          <p className="p-2 px-4 text-xs text-white capitalize came bg-pink-500 rounded-full">
            {/* {role} */}
          </p>
          {/* <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user?.uid}
                    </p> */}
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>
            </div>
            <div className="flex mt-6 items-center justify-center">
              <Link to='/dashboard' className="btn w-1/2 hover:bg-blue-500 bg-pink-800 text-white font-semibold uppercase text-xl"> Dashboard </Link>
              <Link to='/' className="btn w-1/2 hover:bg-blue-500 bg-pink-800 text-white font-semibold uppercase text-xl"> Home </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
