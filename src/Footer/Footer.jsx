import React from 'react'
import { FaCircleChevronRight,FaCircleCheck } from "react-icons/fa6";

// FaCircleChevronRight
const Footer = () => {
  return (
    <footer>
      <div className='text-3xl text-zinc-400 '>
        <a href="https://www.remobie.com/partner" target="_blank" rel="noopener noreferrer" className='w-full block border p-20 flex-col justify-center'>
          <p className='text-center'>สิทธิพิเศษจากพาร์ทเนอร์ </p>
          <p className='text-center'>สำหรับลูกค้า remobie เท่านั้น</p>
          <FaCircleChevronRight className='my-2 mx-auto' />
        </a>
      </div>

      <div className='bg-gradient-to-b from-[#00CDAC] to-[#02AAB0] py-5'>
        <div className='text-white text-center py-5'>
          <p className='text-3xl'>ขายโทรศัพท์กับ remobie ดียังไง?</p>
        </div>

        <div className='flex justify-center gap-10 pb-5'>
          <div className='text-center text-white text-xl'>
            <FaCircleCheck className='my-4 mx-auto text-4xl '/>
            <p>น่าเชื่อถือ</p>
            <p>มีประสบการณ์การรับซื้อ</p>
            <p>ไม่โกงอย่างแน่นอน</p>
          </div>

          <div className='text-center text-white text-xl'>
            <FaCircleCheck className='my-4 mx-auto text-4xl '/>
            <p>น่าเชื่อถือ</p>
            <p>มีประสบการณ์การรับซื้อ</p>
            <p>ไม่โกงอย่างแน่นอน</p>
          </div>

          <div className='text-center text-white text-xl'>
            <FaCircleCheck className='my-4 mx-auto text-4xl '/>
            <p>น่าเชื่อถือ</p>
            <p>มีประสบการณ์การรับซื้อ</p>
            <p>ไม่โกงอย่างแน่นอน</p>
          </div>

          <div className='text-center text-white text-xl'>
            <FaCircleCheck className='my-4 mx-auto text-4xl '/>
            <p>น่าเชื่อถือ</p>
            <p>มีประสบการณ์การรับซื้อ</p>
            <p>ไม่โกงอย่างแน่นอน</p>
          </div>
          
        </div>
      </div>
      <div className='bg-zinc-800 p-5 px-10'>
        <p className='text-white text-xl font-sans'> Copyright © 2023 Remobie Technologies. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer