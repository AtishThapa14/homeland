import React from 'react';

//import image
import Image from '../assets/img/house-banner.png';

//import components
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>
              Buy  Your Dream House With Us.
            </span>
          </h1>
          <p className='max-w-[480px] mb-8 text-justify'>
            The every possible houses you can get in the country is available here. Buy your dream house at the most sophisticated way and reasonable price you can get only here. Every possible options for the every dream properties of yours. <span className='font-bold text-orange-500'>Surf Homeland.</span>
          </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
