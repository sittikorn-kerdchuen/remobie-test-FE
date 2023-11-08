import React, { useState } from 'react';

const Detail = ({ productBrand, productName }) => {
    const [capacity, setCapacity] = useState();
    const [models, setModels] = useState();
    const [warranty, setWarranty] = useState();
    const [body, setBody] = useState()
    const [screen, setScreen] = useState()
    const [display, setDisplay] = useState()
    const [accessories, setAccessories] = useState()
    const [option, setOption] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
    const [countOption, setCountOption] = useState(0)
    const [grade, setGrade] = useState('')
    const [totalCost, setTotalCost] = useState()
    const [selected, setSelected] = useState(false)
    const [step, setStep] = useState(1);

    const capacityHandle = (e) => {
        setCapacity(e);
        setStep(step + 1)
    }
    const modelHandler = (e) => {
        setModels(e)
        setStep(step + 1)
    }
    const warrantyHandler = (e) => {
        setWarranty(e)
        setStep(step + 1)
    }
    const bodyHandler = (e) => {
        setBody(e)
        setStep(step + 1)
    }
    const screenHandle = (e) => {
        setScreen(e)
        setStep(step + 1)
    }
    const dispayHandle = (e) => {
        setDisplay(e)
        setStep(step + 1)
    }
    const accessoriesHandle = (e) => {
        setAccessories(e)
        setStep(step + 1)
    }
    const optionHandle = (e) => {
        const newOption = [...option];
        if (e === 11) {
            for (let i = 0; i <= 10; i++) {
                newOption[i] = false;
            }
        } else {
            newOption[e] = !newOption[e];
        }
        setOption(newOption);
    }
    const calculateHandle = (capacity, models, warranty, body, screen, display, accessories, option) => {
        const countOption = option.reduce((count, value) => count + (value ? 1 : 0), 0);
        const damagesPercen = models + warranty + body + screen + display + accessories + countOption
        const calulatePercen = 100 - damagesPercen
        
        switch (true) {
            case calulatePercen >= 81:
                setGrade('A')
                break;
                case calulatePercen >= 61:
                setGrade('B')
                break;
                case calulatePercen >= 41:
                setGrade('C')
                break;
        
            default:setGrade('D')
                break;
        }
        
        if(capacity === 256){
            const price = 40000
            const totalCost = calulatePercen*price*0.01
            setTotalCost(totalCost)
        }else if(capacity === 512){
            const price = 50000
            const totalCost = calulatePercen*price*0.01
            setTotalCost(totalCost)
        }else if(capacity === 1024){
            const price = 60000
            const totalCost = calulatePercen*price*0.01
            setTotalCost(totalCost)
        }
        
    }


    return (
        <main>
            <section className='px-40 py-10 bg-zinc-100'>
                <div className='bg-white rounded-2xl overflow-hidden'>
                    {productBrand.map((item, idx) => {
                        if (item.product_name === productName) {
                            return (
                                <div key={idx} className=' flex'>
                                    <div className='mb-5'>
                                        <img src={item.image} alt={item.product_name} />
                                        <p className='text-center'>{item.product_name}</p>
                                    </div>
                                    <div className='px-2 pt-5'>
                                        <h2 className='text-2xl border-l-8 border-[#00CDAC] px-2'>รายละเอียดสินค้า</h2>
                                        <ul className='list-disc px-10 text-xl mt-5'>
                                            <li>{item.detail_1}</li>
                                            <li>{item.detail_2}</li>
                                            <li>{item.detail_3}</li>
                                            <li>{item.detail_4}</li>
                                        </ul>
                                    </div>
                                </div>


                            );
                        }
                        return null;
                    })}
                </div>
            </section>

            <section className='bg-[#96F4DE] flex p-5 px-20'>
                <div className=' w-2/5'>
                    <div className=' p-10 bg-white m-5 border-[#00CDAC] border-4 rounded-2xl'>
                        <h2 className='text-2xl border-l-8 border-[#00CDAC] pl-2'>การรักษาความปลอดภัยของ Apple</h2>
                        <p>Ipad หากทำการลบข้อมูลการตั้งค่าของเครื่อง
                            จะหมดปัญหาความเสี่ยงเกี่ยวกับการรั่วไหลของข้อมูลเครื่อง
                            เพราะฉะนั้นผู้ใช้สามารถวางใจในการขายสินค้าโทรศัพท์
                            ให้แก่ทางบริษัท
                        </p>
                        <ul className='list-disc pl-5'>
                            <li>ไฟล์แต่ละไฟล์ในIpadจะมีการเข้ารหัสแบบสร้างขึ้นเอง
                                และจะได้รับการจัดเก็บอย่างปลอดภัยในฮาทร์ดิสก์ของIpad
                            </li>
                            <li>
                                หากผู้ใช้ทำการลบข้อมูลและคืนการตั้งค่าเดิมทั้งหมด
                                เทียบเท่ากับการลบไฟล์ทั้งหมดในIpad
                                จะไม่มี โอกาสในการกู้ข้อมูลและการตั้งค่าคืนกลับมา
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-3/5 p-6'>
                    <div className='w-full flex flex-col gap-2'>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(1)}>ความจุของโทรศัพท์</button>
                            {step === 1 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => capacityHandle(256)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE] '>256 gb</button>
                                    <button type="button" onClick={() => capacityHandle(512)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>512 gb</button>
                                    <button type="button" onClick={() => capacityHandle(1024)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>1 tb</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(2)} >Model</button>
                            {step === 2 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => modelHandler(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE] '>เครื่องไทย TH</button>
                                    <button type="button" onClick={() => modelHandler(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>Model ZP 14 Series</button>
                                    <button type="button" onClick={() => modelHandler(10)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>เครื่องนอก</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(3)} >ประกัน</button>
                            {step === 3 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => warrantyHandler(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE] '>เหลือมากกว่า 6 เดือน</button>
                                    <button type="button" onClick={() => warrantyHandler(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>เหลือน้อยกว่า 6 เดือน</button>
                                    <button type="button" onClick={() => warrantyHandler(10)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>หมดประกัน</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(4)}>สภาพตัวเครื่อง</button>
                            {step === 4 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => bodyHandler(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>ไม่มีรอยขีดข่วน</button>
                                    <button type="button" onClick={() => bodyHandler(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>มีรอยนิดหน่อย</button>
                                    <button type="button" onClick={() => bodyHandler(10)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>สีหลุด ถลอก</button>
                                    <button type="button" onClick={() => bodyHandler(15)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>มีรอยตก/เบี้ยว/แตก/งอ</button>
                                    <button type="button" onClick={() => bodyHandler(20)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>ฝาหลัง/กระจกหลัง แตก</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(5)}>สภาพหน้าจอ</button>
                            {step === 5 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => screenHandle(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>หน้าจอไม่มีรอย</button>
                                    <button type="button" onClick={() => screenHandle(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>หน้าจอมีรอยบางๆ</button>
                                    <button type="button" onClick={() => screenHandle(10)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>หน้าจอมีรอยหนาลึก</button>
                                    <button type="button" onClick={() => screenHandle(15)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>หน้าจอแตก</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(6)}>การแสดงผลหน้าจอ</button>
                            {step === 6 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => dispayHandle(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>แสดงผลปกติ</button>
                                    <button type="button" onClick={() => dispayHandle(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>ฝุ่นในจอ</button>
                                    <button type="button" onClick={() => dispayHandle(10)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>dead pixel/จุดสี/จอมีเส้น/จอเทียบแท้</button>
                                    <button type="button" onClick={() => dispayHandle(15)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>ไม่สามารถแสดงผลได้</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(7)}>อุปกรณ์เสริม</button>
                            {step === 7 && (
                                <div className='grid grid-cols-3 gap-10 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => accessoriesHandle(0)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>อุปกรณ์ครบ</button>
                                    <button type="button" onClick={() => accessoriesHandle(5)} className='bg-white p-3 rounded-xl hover:bg-[#96F4DE]'>อุปกรณ์ไม่ครบ</button>
                                </div>
                            )}
                        </div>

                        <div className='bg-zinc-100 rounded-xl'>
                            <button className=' block w-full p-5 text-xl' onClick={() => setStep(8)}>ปัญหาการใช้งานอื่นๆ (เลือกได้มากกว่า1ข้อ)</button>
                            {step === 8 && (
                                <div className='grid grid-cols-6 gap-5 px-5 pb-5 animate-fade-down animate-once animate-duration-[400ms]'>
                                    <button type="button" onClick={() => optionHandle(0)} className={option[0] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>แบตเตอรี่ ต่ำกว่า 80%</button>
                                    <button type="button" onClick={() => optionHandle(1)} className={option[1] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ระบบสัมผัส</button>
                                    <button type="button" onClick={() => optionHandle(2)} className={option[2] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>wifi Blutooth GPS</button>
                                    <button type="button" onClick={() => optionHandle(3)} className={option[3] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ระบบสั่น</button>
                                    <button type="button" onClick={() => optionHandle(4)} className={option[4] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>โทรออก,รับสาย มีปัญหา</button>
                                    <button type="button" onClick={() => optionHandle(5)} className={option[5] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>แสกนนิ้ว,Face Scan</button>
                                    <button type="button" onClick={() => optionHandle(6)} className={option[6] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ปุ่มHomeมีปัญหา</button>
                                    <button type="button" onClick={() => optionHandle(7)} className={option[7] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ลำโพงมีปัญหา</button>
                                    <button type="button" onClick={() => optionHandle(8)} className={option[8] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>กล้องหน้า/หลัง มีปัญหา</button>
                                    <button type="button" onClick={() => optionHandle(9)} className={option[9] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>Sensor</button>
                                    <button type="button" onClick={() => optionHandle(10)} className={option[10] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ปุ่มล็อค power volumn</button>
                                    <button type="button" onClick={() => optionHandle(11)} className={option[11] === true ? 'bg-[#c7fff2] outline-[#96F4DE] outline p-3 rounded-xl hover:bg-[#96F4DE]' : 'bg-white p-3 rounded-xl hover:bg-[#96F4DE]'}>ไม่มีปัญหา</button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='px-60 mt-5'>
                        <button type="button" onClick={() => calculateHandle(capacity, models, warranty, body, screen, display, accessories, option)} className='p-2 px-5 bg-yellow-400 w-full text-xl shadow-lg rounded-xl'>ประเมินราคา</button>
                    </div>
                </div>

            </section>

            <section>
                <div className='flex '>
                    <div className='mx-auto border-4 border-[#00CDAC] rounded-xl py-5 px-20 mt-10'>
                    {productBrand.map((item,idx)=>{
                        if(item.product_name === productName){
                            return(
                                <div key={idx} className=''>
                                    <img src={item.image} alt={productName} />
                                    <h2 className='text-center'>{productName}</h2>
                                    <p className='text-center text-xs'>ความจุ {capacity} gb</p>
                                    <p className='text-center text-xl'>Grade</p>
                                    <p className='text-center text-8xl'>{grade}</p>
                                    <p className='text-center'>ราคาประเมิน : <span className='text-3xl'>{totalCost}</span> บาท</p>
                                </div>
                            )
                        }
                    })}
                        
                    </div>

                    

                </div>
                <div className='p-10 mx-auto'>
                        <button type='button' className='border-2 border-[#00CDAC] px-5 py-2 text-xl rounded-xl block mx-auto hover:bg-[#00CDAC] hover:outline-offset-4 hover:outline hover:outline-[#00CDAC] hover:duration-100'>ติดต่อเรา เพื่อรับข้อเสนอนี้</button>
                    </div>
            </section>


        </main>
    )
}

export default Detail