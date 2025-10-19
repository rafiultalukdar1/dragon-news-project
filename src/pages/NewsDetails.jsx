import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SocialLogin from '../components/HomeLayouts/SocialLogin';
import FindUs from '../components/HomeLayouts/FindUs';
import Qzone from '../components/HomeLayouts/Qzone';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    },[id, data])

    return (
        <div className='container'>
            <header>
                <Header></Header>
            </header>
            <div className='grid grid-cols-12 gap-[30px] py-[30px] md:py-[55px]'>
                <div className='col-span-9'>
                    <h2 className='text-[#403F3F] text-[20px] font-semibold pb-[20px]'>Dragon News</h2>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </div>
                <div className='col-span-3'>
                    <SocialLogin></SocialLogin>
                    <FindUs></FindUs>
                    <Qzone></Qzone>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;