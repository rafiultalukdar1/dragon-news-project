import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({singleNews}) => {

    const {id, author, title, image_url, details, rating, total_view } = singleNews;
    const date = new Date(singleNews.author.published_date).toLocaleDateString();

    const totalStars = 5;
    const filledStars = Math.round(rating.number);

    return (
        <div className='rounded-[5px] border border-[#E7E7E7] bg-white'>
            <div className='p-[20px] bg-[#F3F3F3] flex items-center justify-between'>
                <div className='flex items-center gap-[15px]'>
                    <img className='w-[42px] h-[42px] object-cover rounded-full' src={author.img} alt="" />
                    <div>
                        <h4 className='text-[#403F3F] text-[16px] font-semibold'>{author.name}</h4>
                        <p className='text-[#706F6F] text-[14px]'>{date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <CiBookmark size={24} className='cursor-pointer text-[#706F6F]' />
                    <CiShare2 size={24} className='cursor-pointer text-[#706F6F]' />
                </div>
            </div>
            <div className='p-[20px]'>
                <h2 className='text-[#403F3F] text-[20px] font-bold'>{title}</h2>
                <img className='mt-[20px] mb-[30px] rounded-[5px]' src={image_url} alt="" />
                <p className='text-[#706F6F] text-[16px]'>{details.length > 200 ? (<>{details.slice(0, 200)}...<Link to={`/news-details/${id}`} className='bg-[linear-gradient(90deg,#FF8C47_0%,#F75B5F_100%)] bg-clip-text text-transparent font-semibold cursor-pointer'>Read More</Link></>) : (details)}</p>
                <span className='block bg-[#E7E7E7] w-full h-[1px] my-[20px]'></span>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex gap-[7px]'>
                            {Array.from({ length: totalStars }).map((_, index) => (<FaStar key={index} size={18} className={index < filledStars ? 'text-[#FF8C47]' : 'text-[#E0E0E0]'}/> ))}
                        </div>
                        <span className='text-[16px] font-medium text-[#706F6F]'>{rating.number}</span>
                    </div>
                    <div className='flex gap-[10px]'>
                        <FaEye className='text-[#706F6F]' size={20} />
                        <span className='text-[#706F6F] text-[16px] font-medium'>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;