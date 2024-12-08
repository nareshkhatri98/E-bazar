import React from 'react'

const InputField = ({error,...props}) => {
  return (
    <div>
         <div className='mt-3'>
      <input
        className="w-[472px]  p-5 border border-[#E6E6E6] rounded-[6px] h-[49px]"
        {...props}
      />
      {error && <p className="text-red-500 text-Body-Small">{error}</p>}
    </div>
    </div>
  )
}

export default InputField