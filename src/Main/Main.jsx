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



const Main = () => {

  const [data, setData] = useState([])
  const [brandData, setBrandData] = useState([])
  const [brand, setBrand] = useState('APPLE')

  console.log(brand)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/')
        const responseBrand = await axios.get('http://localhost:8080/brand')
        console.log('response :>> ', response.data);
        console.log('responseBrand.data :>> ', responseBrand.data);

        setData(response.data)
        setBrandData(responseBrand.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadData();
  }, [brand])




  return (
    <main className=' p-20   bg-zinc-50'>
      <h2 className='text-center text-3xl mb-10'>เลือกซื้อสินค้าที่ใช่สำหรับคุณ ได้ที่นี่</h2>
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
            {brandData.map((item, idx) => {
              if (item.brand_name === brand) {
                return (
                  <div className='flex flex-col justify-between   items-center w-[200px] h-[150px] mb-5' key={idx}>
                    <img src={item.image} alt={item.brand_name} className='w-full' />
                    <p className='text-center text-sm text-zinc-400 px-1   w-[150px]'>{item.product_name}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className=' flex justify-end'>
            <div className=' p-3 rounded-bl-xl bg-zinc-300 shadow-md '>
              <label htmlFor="price" >เรียงตาม </label>
              <select name="price" id="" className=' mr-4 bg-zinc-300'>
                <option value="">ราคา: สูง - ต่ำ</option>
                <option value="">ราคา: ต่ำ - สูง</option>
              </select>

              <label htmlFor="price" >สภาพสินค้า </label>
              <select name="price" id="" className=' bg-zinc-300'>
                <option value="">เกรด A</option>
                <option value="">เกรด B</option>
                <option value="">เกรด C</option>
                <option value="">เกรด D</option>
              </select>


            </div>

            <div>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Main