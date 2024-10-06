import Users from "./Users";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignoutUser } from "../../store/actions/userActions";
import Status from "./Status";
import logo from "../../../public/chatlogo.png";

const SideNav = () => {
  const dispatch = useDispatch();
  const { allStatus } = useSelector((state) => state.statusReducer);
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="w-full relative md:w-[25%] md:border-r border-zinc-400 h-full bg-zinc-100 md:flex md:flex-col">
      <div className="w-full py-2 border-b border-zinc-400 flex items-center justify-between px-4">
        <h1 className="text-[9vw] md:text-[2.7vw] text-[#2383BF] font-bold">
          Chat<span className="text-[#FA921D]">X</span>
        </h1>
        {/* <i className="ri-whatsapp-line text-[9vw] md:text-[2.7vw]"></i> */}
        <div className="w-[15vw] h-[15vw] md:w-[4vw] md:h-[4vw] overflow-hidden">
          <img className="w-full h-full object-cover" src={logo} alt="" />
        </div>
      </div>
      <div className="w-full py-3 border-b border-zinc-400 flex items-center justify-items-start gap-x-2 px-4 overflow-x- overflow-y-hidden whitespace-nowrap">
        {user?.status?.length === 0 ? <Status user={user} /> : ""}
        {allStatus &&
          allStatus.map((status) => (
            <Status key={status._id} user={status.user} />
          ))}
      </div>
      <Users />
      <div className="w-full text-white absolute bottom-0 py-4 md:py-3 flex items-center justify-between px-4">
        <button
          onClick={() => dispatch(asyncSignoutUser())}
          className="px-4 py-2 rounded-full flex items-center gap-1 bg-zinc-600 hover:bg-zinc-700"
        >
          <i className="ri-logout-box-line"></i>
          <span>Logout</span>
        </button>
        <Link
          to="/edit"
          className="px-4 py-2 rounded-full flex items-center gap-1 bg-zinc-600 hover:bg-zinc-700"
        >
          <i className="ri-pencil-line"></i>
          <span>Edit</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
