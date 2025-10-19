import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    const {image_url, title, details, category_id} = news;

    return (
        <div className='rounded-[5px] border border-[#E7E7E7] bg-white p-[20px]'>
            <img className='w-full rounded-[5px]' src={image_url} alt="" />
            <h2 className='text-[#403F3F] text-[25px] font-bold pt-[20px]'>{title}</h2>
            <p className='text-[#706F6F] text-[16px] pt-[10px]'>{details}</p>
            <Link className='inline-flex items-center gap-[5px] text-white text-[20px] font-medium px-[25px] py-[8px] bg-[#D72050] mt-[30px]' to={`/caterogy/${category_id}`}><IoMdArrowBack /><span>All news in this category</span></Link>
        </div>
    );
};

export default NewsDetailsCard;