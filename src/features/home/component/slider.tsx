'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from "next/link";
import {Navigation, Pagination, Autoplay} from'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sliderImg_1 from '@/assets/images/home-slider-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider(){
  return<>
  <section className='relative'>
    <Swiper modules={[Navigation, Pagination,Autoplay]} navigation= {{
      prevEl:".custom-prev",
      nextEl:'.custom-next'
    }}
    pagination={{
      clickable:true,
    }}
    autoplay={{
      delay:5000,
    }}
    loop={true}
    >
      <SwiperSlide >
      <div style={{
        backgroundImage: `url(${sliderImg_1.src})`,
        backgroundSize: "cover",
        backgroundPosition:"center" ,

      }} className='h-100 flex items-center justify-center relative'>
        <div className='overlay py-20 text-white p-4 w-full bg-linear-to-r  absolute inset-0 from-green-500/90 to-green-400/50'>
        <div className='container h-full content-center'>
          <h2 className='text-white text-3xl font-bold mb-4 max-w-96'>
            Fresh Products Delivered to your Door
          </h2>
          <p>Get 20% off your first order</p>
          <div className='mt-4'>
            <Link href={`/products`} className='btn bg-white border-2 border-white/50 text-green-500'>Shop now </Link>
            <Link href={`deal`} className='btn bg-transparent border-2 border-white/50  text-white ml-2'>View Deals</Link>
          </div>
          

        </div>

        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{
        backgroundImage: `url(${sliderImg_1.src})`,
        backgroundSize: "cover",
        backgroundPosition:"center" ,

      }} className='h-100 flex items-center justify-center relative'>
        <div className='overlay py-20 text-white p-4 w-full bg-linear-to-r absolute inset-0 from-green-500/90 to-green-400/50'>
        <div className='container h-full content-center'>
          <h2 className='text-white text-3xl font-bold mb-4 max-w-96'>
            Premium Quality Guaranteed
          </h2>
          <p>Fresh from farm to your table</p>
          <div className='mt-4'>
            <Link href={`/products`} className='btn bg-white border-2 border-white/50 text-green-500'>Shop now </Link>
            <Link href={`deal`} className='btn bg-transparent border-2 border-white/50  text-white ml-2'>Learn More</Link>
          </div>
          

        </div>

        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{
        backgroundImage: `url(${sliderImg_1.src})`,
        backgroundSize: "cover",
        backgroundPosition:"center" ,

      }} className='h-100 flex items-center justify-center relative'>
        <div className='overlay py-20 text-white p-4 w-full bg-linear-to-r absolute inset-0 from-green-500/90 to-green-400/50'>
        <div className='container h-full content-center'>
          <h2 className='text-white text-3xl font-bold mb-4 max-w-96'>
            Fast & Free Delivery
          </h2>
          <p>Same day delivery available</p>
          <div className='mt-4'>
            <Link href={`/products`} className='btn bg-white border-2 border-white/50 text-green-500'>Order Now</Link>
            <Link href={`deal`} className='btn bg-transparent border-2 border-white/50  text-white ml-2'>Delivery Info</Link>
          </div>
          

        </div>

        </div>
      </div>
      </SwiperSlide>
      
    </Swiper>

<button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
  <FontAwesomeIcon icon={faChevronCircleLeft} className="text-3xl" />
</button>

<button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:scale-110">
  <FontAwesomeIcon icon={faChevronCircleRight} className="text-3xl" />
</button>
  </section>
  </>
}