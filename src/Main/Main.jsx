import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import components below this
import Detail from './Detail'
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
    const [brand, setBrand] = useState("")
    const [productName, setProductName] = useState("")
    const [productBrand, setProductBrand] = useState([])


    useEffect(() => {
        const loadData = async () => {
            try {
                // const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL)
                const responseBrand = await axios.get(import.meta.env.VITE_APP_BACKEND_URL + 'brand')

                // setProducts(response.data)
                setProductBrand(responseBrand.data)
                console.log('object :>> ', productBrand);
            } catch (error) {
                console.error(error)
            }
        }
        loadData();
    }, [])

    return (
        <main>
            <h2 className='text-3xl text-center my-5'>เลือกแบรนด์ที่ต้องการขาย</h2>
            <section className='grid grid-cols-4 justify-center w-[800px] mx-auto gap-2 my-5'>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("APPLE")} className='w-full'><img src={apple} className='w-full h-[80px] object-contain' alt="apple" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("HUAWEI")} className='w-full'><img src={huawei} className=' object-contain w-full h-[80px] ' alt="huawei" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("MI")} className='w-full'><img src={mi} className=' object-contain w-full h-[80px]' alt="mi" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("ONEPLUS")} className='w-full'><img src={oneplus} className=' object-contain w-full h-[80px]' alt="oneplus" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300 overflow-hidden'><button type="button" onClick={() => setBrand("SAMSUNG")} className='w-full'><img src={samsung} className=' object-contain scale-150 w-full h-[80px]' alt="samsung" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300 overflow-hidden'><button type="button" onClick={() => setBrand("OPPO")} className='w-full'><img src={oppo} className=' object-contain w-full h-[80px] scale-125 ' alt="oppo" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("REALME")} className='w-full'><img src={realme} className=' object-contain w-full h-[80px] px-5' alt="realme" /></button></div>
                <div className='bg-[#96F4DE]  p-2  h-[100px] rounded-xl hover:bg-[#00CDAC] hover:duration-300'><button type="button" onClick={() => setBrand("VIVO")} className='w-full'><img src={vivo} className=' object-contain w-full h-[80px] px-5 scale-90' alt="vivo" /></button></div>
            </section>

            <section>
                <h2 className='text-3xl text-center my-10'>เลือกรุ่นที่ต้องการขาย</h2>
                <div className=' bg-white rounded-tr-xl grid grid-cols-8 my-0 mx-auto px-40'>
                    {productBrand?.map((item, idx) => {
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
            </section>

            <Detail productBrand = {productBrand} productName = {productName} />

            <section>
                
            </section>
        </main>
    )
}

export default Main