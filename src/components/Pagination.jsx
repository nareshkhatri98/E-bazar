import React from 'react'
import PaginationDots from './PaginationDots'
import { sliderData } from '@/assets/sliderData';

const Pagination = (props) => {
  return (
    <div className="flex items-center justify-center absolute bottom-16 left-0 right-0">
      {sliderData.map((sliderItem, index) => (
        <div key={sliderItem.id}>
          <PaginationDots
            active={index === props.activeIndex}
            index={index}
            moveToIndex={props.moveToIndex} />
        </div>
      ))}
    </div>
  )
}

export default Pagination