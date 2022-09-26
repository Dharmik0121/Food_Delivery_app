import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col  gap-6 items-start justify-center'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'> Bike Delivery</p>
          <div className='w-6 h-6 rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full bg-white h-full object-contain' alt='delivery img' />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in <span className='text-orange-600 lg:text-[5rem] text-[3rem]'>Your City</span>
        </p>

        <p className='text-base text-center md:text-left md:w-[80%] text-textColor'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sit rem officia quae ad quaerat soluta necessitatibus nostrum. Illum animi consequuntur voluptatum ea voluptate, accusamus ad expedita commodi eos vitae
        </p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg md:w-auto hover:shadow-lg transition-all ease-in-out duration-100'> Order Now  </button>
      </div>
      <div className='p-4 flex-1 flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-685' alt='hero-bg' />

        <div className='w-full lg:px-32 h-full absolute flex flex-wrap top-0 left-0 items-center justify-center gap-4 md:-left-20 py-4'>
          <div className=' lg:w-200 p-4 flex-col rounded-3xl items-center justify-center flex'>
            <img src={I1} className=' w-375 -mt-10 lg:w-1000 lg:-mt-20' alt='i1' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
