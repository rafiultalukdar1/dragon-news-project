import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const {id} = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);
    
    useEffect(() => {

        if(id == 0) {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews)
        }

    },[id, data])


    return (
        <>
            <h2 className='text-[#403F3F] text-[20px] font-semibold mb-[20px]'>Dragon News Home ({categoryNews.length})</h2>

            <div className='space-y-[30px]'>
                {
                    categoryNews.map(singleNews => <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </>
    );
};

export default CategoryNews;