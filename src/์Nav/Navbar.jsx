import React from 'react'
import image from '../img/logo.png'

const Navbar = () => {
  return (
    <nav className='fixed w-full z-20' >
      <div className='bg-[#00CDAC] flex justify-between items-center px-10 shadow-xl'>
        <div>
          <a href="https://www.remobie.com/" target="_blank" rel="noopener noreferrer"> <img src={image} alt="logo" className='w-[180px]' /></a>
        </div>

        <ul className='flex text-white gap-5 text-xl'>
          <li className='p-7 hover:bg-white hover:text-[#00CDAC] hover:duration-500'><a href="https://www.remobie.com/howto" target="_blank" rel="noopener noreferrer">remobie ใช้ยังไง?</a></li>
          <li className='p-7 hover:bg-white hover:text-[#00CDAC] hover:duration-500'><a href="https://www.remobie.com/faq" target="_blank" rel="noopener noreferrer">คำถามที่พบบ่อย</a></li>
          <li className='p-7 hover:bg-white hover:text-[#00CDAC] hover:duration-500'><a href="https://www.remobie.com/enterprise" target="_blank" rel="noopener noreferrer">ลูกค้าองกร</a></li>
          <li className='p-7 hover:bg-white hover:text-[#00CDAC] hover:duration-500'>จังหวัดของคุณคือ</li>
          <li className='p-7'>02-460-9595</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar