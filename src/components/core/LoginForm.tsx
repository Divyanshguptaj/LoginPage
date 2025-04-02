import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../common/input";
import Button from "../common/button";
// Define Zod schema for validation with email
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input type="email" placeholder="Email" register={register("email")} error={errors.email?.message} />
      <Input type="password" placeholder="Password" register={register("password")} error={errors.password?.message} />
      <Button text="Login" textColor="text-white" bgColor="bg-blue-800" type="submit" onClick={handleSubmit(onSubmit)}/>
    </form>
  );
};

export default LoginForm;
