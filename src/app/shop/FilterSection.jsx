import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setRatingFilter, setSortFilter } from '@/Redux/slice/filterSlice';
import { ArrowDownIcon, CrossIcon } from '@/assets/icons';

const FilterSection = () => {
  const dispatch = useDispatch();

  const handleRatingChange = (e) => {
    dispatch(setRatingFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortFilter(e.target.value));
  };

  return (
    <div className='container mx-auto'>
      {/* Filters */}
      <div className='flex justify-between items-center mt-10'>
        {/* Rating Filter */}
        <div className='flex items-center border-2 px-10 p-2'>
          <select
            onChange={handleRatingChange}
            className='text-Body-Small text-Gray-7 font-400'
          >
            <option value="">Sort by: Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        {/* Sort Filter */}
        <div className='flex items-center border-2 px-10 p-2'>
          <select
            onChange={handleSortChange}
            className='text-Body-Small text-Gray-7 font-400'
          >
            <option value="">Sort by: Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
