import React, { useState } from 'react'

const Produk = () => {

  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/a00ddf4a-0378-4189-a4fc-09f1a92439aa/NIKE+C1TY.png",
    img2: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/bfb226ee-c838-4d28-b2fa-e2b3e6be6233/NIKE+C1TY.png",
    img3: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto,q_auto:eco/b909e169-7af2-4714-aafa-3dd3c9a2953a/NIKE+C1TY.png"
  })

  const [activeImg, setActiveImage] = useState(images.img1)

  return (
    <div className='flex flex-col justify-between lg:flex-row gap-24'>
      <div className='flex flex-col gap-6'>
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-col justify-between h-24 gap-6 lg:flex-row'>
          <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer'
            onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer'
            onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer'
            onClick={() => setActiveImage(images.img3)} />
        </div>
      </div>
      {/*ABOUT*/}
      <div className='flex flex-col gap-4'>
        <div>
          <span className='text-violet-600 font-semibold'>Special Sneaker</span>
          <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
        </div>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Dolor explicabo, minima placeat beatae odio enim totam possimus fugiat, 
          perferendis quia facere perspiciatis qui exercitationem officiis dolore voluptates, 
          veniam quisquam ducimus!
        </p>
        <h6 className='text-2xl font-semibold'>$199.00</h6>
        <div>
            <div className='text-2xl'>
              <button></button>
              <span></span>
              <button></button>
            </div>
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Produk
