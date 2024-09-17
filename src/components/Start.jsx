import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ star }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
            <span key={index}>
                {
                    star >= index + 1 
                    ? <FaStar style={{ color: '#ffc107' }} /> 
                    : star >= number 
                    ? <FaStarHalfAlt style={{ color: '#ffc107' }} /> 
                    : <AiOutlineStar style={{ color: '#ffc107' }} />
                }
            </span>
        );
    });

    return (
        <div className='flex'>
            {ratingStar}
        </div>
    );
};

export default Star;
