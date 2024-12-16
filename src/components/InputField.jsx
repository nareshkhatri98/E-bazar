import React from 'react'

const InputField = ({error,pageType,...props}) => {
  const widthClass =
    pageType === "auth"
      ? "w-[29.5rem]"
      : "border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2";
  return (
    <div>
         <div className='mt-3'>
      <input
        className={`w-[472px]  p-5 border border-[#E6E6E6] rounded-[6px] h-[49px] ${widthClass}`}
        {...props}
      />
      {error && <p className="text-red-500 text-Body-Small">{error}</p>}
    </div>
    </div>
  )
}

export default InputField