import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import FormInput from "../CommonComponent/FormInput";

const signupSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

const Signup = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    const user = {
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">

        <h1 className="text-center text-2xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Create your account to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">

          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <button type="submit" className="w-full rounded-lg bg-[#18232C] py-3 text-sm font-medium text-white transition hover:bg-[#263640]">
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")} className="font-medium text-blue-600 hover:text-blue-700" >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;