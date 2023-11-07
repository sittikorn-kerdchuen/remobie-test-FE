import React from 'react'

const Detail = ({productBrand,productName}) => {
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

            <section>
                
            </section>


        </main>
    )
}

export default Detail