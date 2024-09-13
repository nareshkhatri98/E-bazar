import React from 'react'

const PaginationDots = (props) => {
  return (
    <div
      onClick={() => props.moveToIndex(props.index)}
      className={`h-2 ${
        props.active ? "w-4  bg-[#00B207] transition-[width] duration-50" : "w-2  bg-[#B4CCB4]"
      } rounded-full mx-1 cursor-pointer`}
    ></div>
  )
}

export default PaginationDots