import React from 'react';
import { motion } from 'framer-motion';

const PaginationDots = (props) => {
  return (
    <motion.div
      onClick={() => props.moveToIndex(props.index)}
      className={`h-2 rounded-full mx-1 cursor-pointer ${props.active ? 'w-4 bg-primary' : 'w-2 bg-Green-Gray-2'
        }`}
      animate={
        props.active
          ? {
            scale: [1, 2, 2, 1, 1],
            rotate: [360, 360, 180, 360, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }
          : {}
      }
    ></motion.div>
  );
};

export default PaginationDots;
