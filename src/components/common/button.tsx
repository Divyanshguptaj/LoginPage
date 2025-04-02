import React from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "text-white",
  bgColor = "bg-blue-800",
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 rounded-lg transition ${textColor} ${bgColor} hover:opacity-80`}
    >
      {text}
    </button>
  );
};

export default Button;