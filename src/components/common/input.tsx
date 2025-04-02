import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  error?: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ type, placeholder, error, register }) => {
  return (
    <div className="w-full text-black">
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
