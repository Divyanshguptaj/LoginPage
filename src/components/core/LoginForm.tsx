import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../common/input";
import Button from "../common/button";
import axios from "axios";
import { toast } from 'react-hot-toast';
// Define Zod schema for validation with email
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if(response.data?.success){
        toast.success("Login successfull!");
      }else{
        toast.error("Invalid Password");
      }
    } catch (error: any) {
      console.log(error.response.data?.message);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input type="email" placeholder="Email" register={register("email")} error={errors.email?.message} />
      <Input type="password" placeholder="Password" register={register("password")} error={errors.password?.message} />
      <Button text="Login" textColor="text-white" bgColor="bg-blue-800" type="submit" onClick={handleSubmit(onSubmit)} loading={loading}/>
    </form>
  );
};

export default LoginForm;
