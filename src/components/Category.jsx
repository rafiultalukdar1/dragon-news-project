import React, { use } from 'react';
import { NavLink } from 'react-router';

const caterogyPromise = fetch('/categories.json').then(res => res.json())

const Category = () => {

    const categories = use(caterogyPromise);

    return (
        <div>
            <h2 className='text-[#403F3F] text-[20px] font-semibold'>All Caterogy ({categories.length})</h2>
            <div className='flex flex-col gap-[10px] mt-[20px] category'>
                {
                    categories.map(category => <NavLink to={`/caterogy/${category.id}`} key={category.id} className='text-[#9F9F9F] text-[18px] font-medium text-center py-[10px] px-[15px] hover:bg-[#E7E7E7] border border-[#E7E7E7] rounded-[4px]'>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;