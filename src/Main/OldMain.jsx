import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Main.css'
// import image
import apple from '../../img/apple.png'
import samsung from '../../img/samsung.png'
import oppo from '../../img/oppo.png'
import vivo from '../../img/vivo.png'
import realme from '../../img/realme.png'
import mi from '../../img/mi.png'
import huawei from '../../img/huawei.png'
import oneplus from '../../img/oneplus.png'



const OldMain = () => {

  const [products, setProducts] = useState([])
  const [brandData, setBrandData] = useState([])
  const [productName, setProductName] = useState('iphone 15 pro max')
  const [brand, setBrand] = useState('APPLE')
  const [grade, setGrade] = useState('A')
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);



  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL)
        const responseBrand = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'brand')

        setProducts(response.data)
        setBrandData(responseBrand.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadData();
  }, [brand])

  // Calculate the discount percentage based on the current month and a 4-month cycle
  const discountCycle = 4;
  const discountPercentage = ((currentMonth - 1) % discountCycle) * 5;

  return (
    <main className=' p-20   bg-zinc-100'>
      <h2 className='text-center text-3xl mb-10'>เลือกขายสินค้าที่ใช่สำหรับคุณ ได้ที่นี่</h2>
      <section className='flex justify-center'>
        <div className='p-5 bg-[#00CDAC] rounded-l-2xl w-5/12'>
          <ul className='grid-cols-2'>
            <li><button type="button"><img src={apple} alt="apple" onClick={() => setBrand('APPLE')} className='w-[150px]  hover:bg-[#01C1A2] rounded-xl' /></button></li>
            <li><button type="button"><img src={samsung} alt="samsung" onClick={() => setBrand('SAMSUNG')} className='w-[150px] h-[100px] object-contain  hover:bg-[#01C1A2] rounded-xl' /></button></li>
            <li><button type="button"><img src={oppo} alt="oppo" onClick={() => setBrand('OPPO')} className='w-[150px] h-[100px] object-contain  hover:bg-[#01C1A2] rounded-xl' /></button></li>
            <li><button type="button"><img src={vivo} alt="vivo" onClick={() => setBrand('VIVO')} className='w-[150px] h-[100px] object-contain  px-2 hover:bg-[#01C1A2] rounded-xl' /></button></li>
            <li><button type="button"><img src={realme} alt="realme" onClick={() => setBrand('REALME')} className='w-[150px] h-[100px] object-contain  hover:bg-[#01C1A2] rounded-xl p-2' /></button></li>
            <li><button type="button"><img src={mi} alt="mi" onClick={() => setBrand('MI')} className='w-[150px] h-[100px] object-contain  hover:bg-[#01C1A2] rounded-xl' /></button></li>
            <li><button type="button"><img src={huawei} alt="huawei" onClick={() => setBrand('HUAWEI')} className='w-[150px] h-[100px] object-contain hover:bg-[#01C1A2] rounded-xl p-2' /></button></li>
            <li><button type="button"><img src={oneplus} alt="oneplus" onClick={() => setBrand('ONEPLUS')} className='w-[150px] h-[100px] object-contain  hover:bg-[#01C1A2] rounded-xl' /></button></li>
          </ul>
        </div>

        <div className='bg-[#96F4DE] rounded-r-xl overflow-hidden'>

          <div className=' bg-white rounded-tr-xl flex  overflow-x-auto my-0 mx-auto'>
            {brandData?.map((item, idx) => {
              if (item.brand_name === brand) {
                return (
                  <button key={idx} type="button" onClick={() => setProductName(item.product_name)}>
                    <div className='flex flex-col justify-between   items-center  mb-5 hover:scale-110 hover:duration-300' >
                      <img src={item.image} alt={item.brand_name} className='w-full ' />
                      <p className='text-center text-sm text-zinc-400 px-1   w-[150px]'>{item.product_name}</p>
                    </div>
                  </button>
                );
              }
              return null;
            })}
          </div>

          <div className=' flex justify-end'>
            <div className=' p-3 rounded-bl-xl bg-zinc-300 shadow-md '>
              <label htmlFor="price" >สภาพสินค้า </label>
              <select name="price" id="" className=' bg-zinc-300' onClick={(e) => setGrade(e.target.value)}>
                <option value="A">เกรด A</option>
                <option value="B">เกรด B</option>
                <option value="C">เกรด C</option>
                <option value="D">เกรด D</option>
              </select>
            </div>
          </div>

          <div className='mb-10'>
            <div className='grid grid-flow-row grid-cols-8 p-2 gap-2'>
              {products.map((item, idx) => {
                if (brand === item.brand_name && grade === item.grade && productName === item.product_name) {
                  // Calculate the discounted price
                  const discountedPrice = item.price - (item.price * (discountPercentage / 100));

                  return (
                    <div key={idx} className='rounded-xl overflow-hidden shadow-lg'>
                      <img src={item.image} alt={item.product_name} />
                      <div className='text-center bg-white flex flex-col gap-5 px-2'>
                        <p>{item.product_name}</p>
                        <p className='text-sm text-zinc-600'>{item.detail}</p>
                        <p>
                          <span className='text-sm line-through'>{item.price}</span> {'฿ ' + discountedPrice}
                          <p>discount {discountPercentage} %</p>
                        </p>
                      </div>

                    </div>
                  )
                } return null;
              })

              }

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

export default OldMain