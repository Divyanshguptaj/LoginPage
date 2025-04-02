import React from "react";
import Spinner from "./spinner";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "text-white",
  bgColor = "bg-blue-800",
  type = "button",
  onClick,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`w-full py-2 rounded-lg transition flex justify-center items-center 
        ${textColor} ${bgColor} hover:opacity-80 disabled:opacity-50`}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

export default Button;
