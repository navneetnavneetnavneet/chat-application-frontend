import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncSigninUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import chatlogo from "/chatlogo.png";
import background from "/background.jpg";

const Signin = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    dispatch(asyncSigninUser(userData));
    // toast.success("User Login Successfully");
    reset();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen px-4 py-2 flex items-center justify-center"
    >
      <div className="w-full md:w-[40%] md:px-20 rounded-xl bg-white px-10 pb-5">
        <div className="flex items-center justify-center flex-col">
          <div className="w-20 h-20">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src={chatlogo}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">
            Welcome back to{" "}
            <span className="text-[#2383BF] font-bold">
              Chat<span className="text-[#FA921D]">X</span>
            </span>
          </h1>
          <h4 className="mt-3 text-center leading-tight text-base text-zinc-400 font-semibold">
            Please enter your details to sign in.
          </h4>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 md:gap-2 mt-5 text-lg md:text-base"
        >
          <div>
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2 bg-zinc-100 font-medium rounded-md outline-none border border-zinc-400 text-base"
            />
            {errors?.email?.type === "required" && (
              <span className="text-xs text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2 bg-zinc-100 font-medium rounded-md outline-none border border-zinc-400 text-base"
            />
            {errors?.password?.type === "required" && (
              <span className="text-xs text-red-500 font-semibold">
                This field is required
              </span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="text-xs text-red-500 font-semibold">
                Password should have atleast 6 characters
              </span>
            )}
            {errors?.password?.type === "maxLength" && (
              <span className="text-xs text-red-500 font-semibold">
                Password should not exceed 15 characters
              </span>
            )}
          </div>
          <button className="px-2 py-2 mt-3 rounded-md bg-blue-500 hover:bg-blue-400 duration-100 text-lg font-semibold text-white">
            Sign In
          </button>
        </form>
        <p className="text-lg md:text-base font-semibold text-center w-full mt-5">
          Don't have an account ?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
