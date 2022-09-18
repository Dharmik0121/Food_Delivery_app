import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

const MainContainer = () => {
  const  [{foodItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize relative 
          text-headingColor before:absolute before:rounded-lg 
          before:content before:w-full before:h-1 before:-bottom-4 
          before:bg-gradient-to-tr from-orange-400 to-orange-600 before:left-0 transition-all ease-in-out'>
             🍎 Our fresh and healthy fruits 🍎 </p>

             <div className='hidden md:flex gap-3 items-center '>
              <motion.div onClick={() => setScrollValue(-400)} whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg flex items-center  hover:shadow-lg bg-orange-300 justify-center hover:bg-orange-500 transition-all ease-in-out duration-100 cursor-pointer'> <MdChevronLeft  className='text-lg  text-white'/></motion.div>
              <motion.div onClick={() => setScrollValue(400)} whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg flex items-center hover:shadow-lg bg-orange-300 justify-center hover:bg-orange-500 transition-all ease-in-out duration-100 cursor-pointer'> <MdChevronRight  className='text-lg  text-white'/></motion.div>
             </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((n) => n.category === 'fruits')}/>
      </section>

      <MenuContainer />

      {cartShow && (
        <CartContainer />
      )}
    </div>
  )
}

export default MainContainer