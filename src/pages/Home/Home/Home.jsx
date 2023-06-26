import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import Lottie from "react-lottie";
// import reader from '../../../assets/35235-reading.json'
const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            A reader lives a <br className='hidden md:block' /> thousand lives
            <span className='text-blue-400'> before he dies</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row '>
          <Link to='/books' className='btn md:w-auto md:mr-4 bg-blue-400'>
            <div className='inline-flex items-center justify-center w-full h-full '>
              <p className='mr-3'>Visit Store</p>
              <HiShoppingCart className='w-5 h-5 ' />
            </div>
          </Link>
          <Link
            to='/about'
            className='inline-flex items-center font-semibold text-gray-800 duration-200 hover:text-blue-700'
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
     {/* <div className='lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={reader} loop={true} />
        </div>
    </div>*/}
    </div>
    );
};

export default Home;