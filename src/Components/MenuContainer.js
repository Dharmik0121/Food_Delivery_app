 import React, { useEffect, useState } from 'react'
 import {IoFastFood} from 'react-icons/io5';
 import { categories } from'../utils/data';
 import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

 const MenuContainer = () => {
    const [filter, setfilter] = useState("chicken");

    const [{foodItems}, dispatch] = useStateValue();

    // useEffect(() => {}, [filter])

   return (
    <section className='w-full my-6 ' id='menu'>
        <div className='w-full flex items-center flex-col justify-center'>
        <p className='text-2xl font-semibold  capitalize relative text-headingColor before:absolute before:rounded-lg 
          before:content before:w-full before:h-1 before:-bottom-4 mr-auto
          before:bg-gradient-to-tr from-orange-400 to-orange-600 before:left-0 transition-all ease-in-out duration-100'>
            🔥 Our Hot Dishes 🔥
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-6 py-6 overflow-x-scroll scrollbar-none">
                {categories && categories.map((category) => (
                    <motion.div whileTap={{scale:0.80}} key={category.id} onClick={() => setfilter(category.urlParamName)} className={`group ${filter === category.urlParamName ? 'bg-red-500' : 'bg-card'} w-24  min-w-[94px] h-28 hover:bg-red-500 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 justify-center items-center transition-all duration-150 ease-in-out`}>
                        <div className={`w-10 h-10 ${filter === category.urlParamName ? 'bg-white' : 'bg-red-500'} shadow-lg rounded-full group-hover:bg-white flex items-center justify-center`}>
                            <IoFastFood  className={` ${filter === category.urlParamName ? 'text-textColor' : 'text-card'}  group-hover:text-textColor text-lg `}/>
                        </div>
                        <p className={`text-sm text-textColor ${filter === category.urlParamName ? 'text-white' : 'text-textColor '} group-hover:text-white`}>{category.name}</p>
                    </motion.div>
                ))}
            </div>

            <div className="w-full">
                <RowContainer flag={false} data={foodItems?.filter((n) => n.category == filter)}/>
            </div>
        </div>
    </section>
   )
 }
 
 export default MenuContainer