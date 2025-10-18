import React, { Suspense } from 'react';
import Category from '../Category';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<h4 className='text-[#403F3F] font-medium'>Loading categories...</h4>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;