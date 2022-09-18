import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import emptyCart from '../img/emptyCart.svg';
import CartItem from './CartItem'

const CartContainer = () => {

    const [{ cartItems, cartShow, user, flag, setFlag }, dispatch] = useStateValue();
    const [tot, setTot] = useState();
    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumlator, item) {
            return accumlator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        // console.log(tot);
    }, [tot, flag]);

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        });
        localStorage.setItem("cartItems", JSON.stringify([]));
    }

    return (
        <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }}
            className='flex  flex-col fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md z-[101]'>
            <div className='w-full flex  items-center cursor-pointer p-4 justify-between' >
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>

                <p className='text-textColor text-lg font-semibold'>Cart</p>

                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'><RiRefreshFill onClick={clearCart} /></motion.p>
            </div>

            {cartItems && cartItems.length > 0 ? (
                <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                    {/* Cart Items */}
                    <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                        {/* Cart Item */}
                        {
                            cartItems && cartItems.map(item => (
                                <CartItem item={item} setFlag={setFlag} flag={flag} key={item.id} />
                            ))
                        }
                    </div>
                    {/* Cart Total */}
                    <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-center px-8 py-2'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-400 text-lg'>Sub Total</p>
                            <p className='text-gray-400 text-lg'>${tot}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-400 my-2 text-lg'>Delivery</p>
                            <p className='text-gray-400 text-lg'>$2.5</p>
                        </div>
                        <div className='w-full border-b border-gray-600 my-2'>

                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className='text-gray-200 my-2 text-xl font-semibold'>Total</p>
                            <p className='text-gray-200 text-xl font-semibold'>${tot + 2.5}</p>
                        </div>

                        {user ? (
                            <motion.button whileTap={{ scale: 0.8 }} type='button' className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200 text-gray-50 text-lg my-10 hover:shadow-2xl '>
                                Check Out
                            </motion.button>
                        ) : (
                            <motion.button whileTap={{ scale: 0.8 }} type='button' className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200 text-gray-50 text-lg my-10 hover:shadow-2xl '>
                                Login
                            </motion.button>
                        )}
                    </div>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                    <img src={emptyCart} className='w-300' alt='' />
                    <p className='text-xl text-textColor font-semibold'>Add some items</p>
                </div>
            )}
        </motion.div>
    )
}

export default CartContainer