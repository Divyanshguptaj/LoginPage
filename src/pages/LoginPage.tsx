import React from "react";
import LoginForm from "../components/core/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white relative border-4 border-blue-500">
      <div className="bg-white p-8 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Welcome back!</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
