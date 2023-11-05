import React from 'react'
import image from '../img/hero.jpg'
import { FaMobileAlt, FaCalendarAlt, FaClipboardList, FaShoppingCart, FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='pt-20'>
      <img src={image} className='w-full' alt="" />
      <div className='flex py-10 justify-center gap-32'>

        <div className='flex flex-col justify-center items-center'>
          <p><FaMobileAlt className='text-5xl text-gray-400' /></p>
          <p className='text-gray-400'>เลือกมือถือ</p>
          <p className='text-gray-400'>ที่ต้องการ</p>
        </div>
        <div className='items-center flex'><FaArrowRight className='text-gray-400'/></div>

        <div className='flex flex-col justify-center items-center'>
          <p><FaClipboardList className='text-5xl text-gray-400' /></p>
          <p className='text-gray-400'>ระบุสภาพ</p>
          <p className='text-gray-400'>การใช้งาน</p>
        </div>
        <div className='items-center flex'><FaArrowRight className='text-gray-400'/></div>

        <div className='flex flex-col justify-center items-center'>
          <p><FaCalendarAlt className='text-5xl text-gray-400' /></p>
          <p className='text-gray-400'>ใส่ข้อมูล</p>
          <p className='text-gray-400'>ติดต่อ</p>
        </div>
        <div className='items-center flex'><FaArrowRight className='text-gray-400'/></div>

        <div className='flex flex-col justify-center items-center'>
          <p><FaShoppingCart className='text-5xl text-gray-400' /></p>
          <p className='text-gray-400'>ส่งของ</p>
          <p className='text-gray-400'>และรับสินค้า</p>
        </div>


      </div>
    </div>
  )
}

export default Hero