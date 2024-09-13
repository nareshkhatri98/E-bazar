import React from 'react'

const TopCategory = () => {
  return (
    <div>
        <section className='mt-[6.25rem]'>
        <h1 className="text-center text-[2.5rem] font-semibold  leading-[2.375rem]">
        Top Category
        </h1>
        <div className="flex items-center justify-center gap-1 mt-4">
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700  "></div>
          <div className="w-[40px] h-[4px] bg-[#00B207]  "></div>
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700  "></div>
        </div>
        </section>
    </div>
  )
}

export default TopCategory