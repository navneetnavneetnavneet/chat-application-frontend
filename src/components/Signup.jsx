import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncSignupUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import chatlogo from "/chatlogo.png";
import background from "/background.jpg";

const Signup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    dispatch(asyncSignupUser(userData));
    toast.success("User Register Successfully");
    reset();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen px-4 py-2 flex items-center justify-center"
    >
      <div className="w-full md:w-[40%] md:px-20 px-10 rounded-xl bg-white pb-5">
        <div className="flex items-center justify-center flex-col">
          <div className="w-20 h-20">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src={chatlogo}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">
            Welcome to{" "}
            <span className="text-[#2383BF] font-bold">
              Chat<span className="text-[#FA921D]">X</span>
            </span>
          </h1>
          <h4 className="mt-3 text-center leading-tight text-base text-zinc-400 font-semibold">
            Register to create your first account and start exploring the chat
            in Chat<span>X</span>.
          </h4>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 md:gap-2 mt-5 text-lg md:text-base"
        >
          <div>
            <label htmlFor="fullname" className="font-semibold">
              Full Name
            </label>
            <input
              {...register("fullName", { required: true })}
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full px-2 py-2 bg-zinc-100 font-medium rounded-md outline-none border border-zinc-400 text-base"
            />
            {errors?.fullName?.type === "required" && (
              <span className="text-xs text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              name="username"
              type="text"
              placeholder="Username"
              className="w-full px-2 py-2 bg-zinc-100 font-medium rounded-md outline-none border border-zinc-400 text-base"
            />
            {errors?.username?.type === "required" && (
              <span className="text-xs text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
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
          <div className="flex items-center gap-5">
            <span className="flex gap-1 items-center">
              <input
                {...register("gender", { required: true })}
                value="male"
                name="gender"
                type="radio"
              />
              <p className="font-semibold">Male</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                {...register("gender", { required: true })}
                value="female"
                name="gender"
                type="radio"
              />
              <p className="font-semibold">Female</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                {...register("gender", { required: true })}
                value="others"
                name="gender"
                type="radio"
              />
              <p className="font-semibold">Others</p>
            </span>
          </div>
          <button className="px-2 py-2 mt-3 rounded-md bg-blue-500 hover:bg-blue-400 duration-100 text-lg font-semibold text-white">
            Sign Up
          </button>
        </form>
        <p className="text-lg md:text-base font-semibold text-center w-full mt-5">
          Already have an account ?{" "}
          <Link to="/signin" className="text-blue-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
