import React, { useRef, useEffect, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({flag, data, scrollValue}) => {

   const rowContainer = useRef();
   const [items, setItems] = useState([]);

    const [{ cartItems }, dispatch] = useStateValue();

    const addtocart = () => {  
        dispatch({
          type : actionType.SET_CARTITEMS,
          cartItems : items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

   useEffect(() => {
      rowContainer.current.scrollLeft += scrollValue;
   }, [scrollValue]);

   useEffect(() => {
    addtocart()
   }, [items]);

  return (
    <div ref={rowContainer} className={`w-full flex items-center gap-3 my-10 scroll-smooth  ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
        {data && data.length > 0 ? (
           data.map((item) => (
          <div key={item?.id} className='w-300 h-[205px] flex flex-col justify-between items-center min-w-[300px] md:min-w-[340px]  md:w-340 my-12  p-2 hover:bg-orange-50 bg-rowBg rounded-lg backdrop-blur-lg'>
          <div className='w-full flex items-center justify-between'>
            <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.2}} className='w-40 h-40 max-h-[150px] min-h-[150px] -mt-8 drop-shadow-2xl'>
              <motion.img  src={item?.imageURL}
              className='w-full h-full object-contain' alt='img'/>   
            </motion.div>
            <motion.div onClick={() => setItems([...cartItems, item])} whileTap={{scale :0.75}} className='w-8 -mt-3 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                <MdShoppingCart className='text-white  '/>
            </motion.div>
          </div>
          <div className='w-full flex flex-col items-end justify-end'> 
            <p className='text-textColor text-semibold capitalize text-base md:text-lg'>{item?.title}</p>
            <p className='text-sm text-gray-500 mt-1'>{item?.calories} <span>Calories</span></p>
            <div className='flex items-center gap-8'>
              <p className='text-lg text-headingColor font-semibold '>
                <span className='text-sm text-red-500'>$ </span>{item?.price}
              </p>
            </div>
          </div>
      </div>
        ))
        ) : (
          <div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound} className='h-340' />
            <p className='font-semibold p-2'>Item not found</p>
          </div>
        )}
    </div>
  );
};



export default RowContainer 