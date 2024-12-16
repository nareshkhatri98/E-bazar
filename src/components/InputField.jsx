import React from 'react';

const InputField = ({ error, pageType, ...props }) => {
  // Determine the class based on the pageType
  const widthClass =
    pageType === 'auth'
      ? 'w-[29.5rem] h-[49px] p-5 border border-[#E6E6E6] rounded-[6px]'
      : pageType === 'checkout'
      ? 'border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2'
      : pageType === 'contact'
      ? 'ml-[10px] w-[434px] h-[49px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border'
      : 'w-[0]';

  return (
    <div>
      <div className="mt-3">
        <input
          className={`${widthClass}`}
          {...props}
        />
        {error && <p className="text-red-500 text-Body-Small ml-5">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
