import React from "react";

const Input = ({ error, ...props }) => {
  return (
    <div>
      <input
        className="w-[472px]  p-5 border border-[#E6E6E6] rounded-[6px] h-[49px]"
        {...props}
      />
      {error && <div className="text-red-500 text-Body-Small">{error}</div>}
    </div>
  );
};

export default Input;
