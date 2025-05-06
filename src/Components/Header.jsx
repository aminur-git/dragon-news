import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div>
            <a href='/'>
            <h1 className='text-4xl md:text-6xl text-gray-700 news-font'>The Dragon News</h1>
            </a>
            </div>
            <h2 className='text-gray-400 text-xs md:text-base'>Journalism Without Fear or Favour</h2>
            <p className='text-xs'>{moment().format('dddd, MMMM Do YYYY')}</p>
            
        </div>
    );
};

export default Header;