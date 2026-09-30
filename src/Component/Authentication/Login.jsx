import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../CommonComponent/FormInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../CommonComponent/ConfirmModal";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showInvalidModal, setShowInvalidModal] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && 
      savedUser.email === data.email &&
      savedUser.password === data.password 
    ){localStorage.setItem("isAuthenticated" , "true")
      navigate("/dashboard")
    }else{
      setShowInvalidModal(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">

        <h1 className="text-center text-2xl font-bold text-gray-900">
          Login
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          Login to your account
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
          <button type="submit"
            className="w-full rounded-lg bg-[#2563eb] py-3 text-sm font-medium text-white transition hover:bg-[#1d4ed8]">
            Login
          </button>
          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button type="button" onClick={() => navigate("/signup")} className="font-medium text-blue-600 hover:text-blue-700">
              Sign Up
            </button>
          </p>
        </form>
      </div>
      <ConfirmModal 
        isOpen={showInvalidModal}
        onClose={() => setShowInvalidModal(false)}
        onConfirm={() => setShowInvalidModal(false)}
        title="Invalid Login"
        message="The email or password you entered is incorrect. Please check your credentials and try again."
        confirmText="Try Again"
        type="danger"
      />
    </div>
    
  );
};

export default Login;