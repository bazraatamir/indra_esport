"use client";
import localFont from "next/font/local";
import {useState} from "react";
import Modal from "./components/modal";

const myFont = localFont({
  src: "../public/fonts/SpaceCrusadersItalic-ZV1Zx.ttf",
  display: "swap",
});
const introFont = localFont({
  src: "../public/fonts/ProunXMn.ttf",
  display: "swap",
});
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className='text-lg font-semibold text-[#c5a574]'>БҮРТГҮҮЛЭХ</h2>
        <div className='grid grid-cols-3 gap-[24px]'>
          <a href='https://forms.gle/qSyTk46n8WxpZ52o9' target='blank'>
            <img src='/images/Untitled-2.png' alt='' />
          </a>
          <a
            href=' https://docs.google.com/forms/d/e/1FAIpQLSfv8mOGiHiaQOoY_lC6lQFazXo_eISgsD9mZ1DoIjw5yr0AWA/viewform?usp=dialog'
            target='blank'>
            <img src='/images/cs2.png' alt='' />
          </a>
          <a
            href=' https://docs.google.com/forms/d/e/1FAIpQLSeKtkhxAlhoyIssuFOB0h1bvQjHFFXqADwlvAmLXlHK4KE8qw/viewform?usp=dialog'
            target='blank'>
            <img src='/images/ml.png' alt='' />
          </a>
        </div>
      </Modal>
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline>
          <source
            src='/Gen-2 4197437767,  dota cs2 mobile leg, cinematic, M 5.mp4'
            type='video/mp4'
          />
        </video>
        <h1
          className={`${myFont.className} absolute z-40   text-4xl text-center  md:text-8xl uppercase `}>
          INDRA E-sports Tournament
        </h1>
      </div>
      <main className='w-full bg-[#fff] flex flex-col items-center justify-center pt-24'>
        <div className='bg-white flex justify-center items-center px-4 md:px-6 lg:px-8'>
          <div className='container flex flex-col md:flex-row items-center gap-6 md:gap-12  '>
            {/* Info Section */}
            <div className='cup-info flex-1 flex flex-col gap-6 text-center md:text-left'>
              <h1
                className={`${introFont.className} font-bold text-2xl md:text-3xl text-[#c5a574]`}>
                INDRA Е-СПОРТ ТЭМЦЭЭНИЙ УДИРДАМЖ
              </h1>
              <p
                className={`${introFont.className} text-base text-gray-800 text-justify`}>
                Тэмцээн 2025 оны 3-р сарын 29-нд эхэлж, 3-р сарын 30-ныг хүртэл
                хоёр өдөр үргэлжилнэ. Уг тэмцээнд Mobile Legends, CS:GO, Dota 2
                гэсэн гурван төрлөөр явагдах болно.
              </p>
              <button
                className='w-48 py-3 px-6 bg-black text-white hover:bg-[#c5a574] transition duration-300 mx-auto md:mx-0'
                onClick={openModal}>
                БҮРТГҮҮЛЭХ
              </button>
            </div>

            {/* Image Section */}
            <div className='flex-1 flex justify-center'>
              <img
                className='w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg'
                src='/images/564dcea3-936a-4936-9e29-4de2f1f53494.png'
                alt='Tournament Banner'
              />
            </div>
          </div>
        </div>
        <div className='container bg-[#fff] grid grid-cols-1 lg:grid-cols-3 gap-[24px] py-48 justify-items-center px-4 '>
          <div className='relative h-[500px] max-w-[400px] rounded-lg shadow-lg border-t-4 border-[#c5a574]'>
            <img
              className='h-full object-contain rounded-lg'
              src='/images/3023c58e-90f6-490f-9688-fd6897ef168b (1).png'
              alt=''
            />
            <div className='absolute bottom-0 w-full text-white text-center py-2 rounded-b-lg'>
              <div className='border-t-4 border-[#c5a574] pt-[12px] flex flex-col gap-[10px]'>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  TAX:100,000₮
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  Round Robin Best of 3
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  2025-03-30 29:00
                </p>
              </div>
            </div>
          </div>
          <div className='relative h-[500px] max-w-[400px] rounded-lg shadow-lg border-t-4 border-[#c5a574]'>
            <img
              className='h-full object-contain rounded-lg '
              src='/images/be89952e-9c83-49c8-8c95-30c96c843690.png'
              alt=''
            />
            <div className='absolute bottom-0 w-full text-white text-center py-2 rounded-b-lg'>
              <div className='border-t-4 border-[#c5a574] pt-[12px] flex flex-col gap-[10px]'>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  TAX:100,000₮
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  single elimination Best of 3
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  2025-03-29 09:00
                </p>
              </div>
            </div>
          </div>
          <div className='relative h-[500px] max-w-[400px] rounded-lg shadow-lg border-t-4 border-[#c5a574]'>
            <img
              className='h-full object-contain rounded-lg'
              src='/images/e6191889-0585-4058-9933-859359f6e015.png'
              alt=''
            />
            <div className='absolute bottom-0 w-full text-white text-center py-2 rounded-b-lg'>
              <div className='border-t-4 border-[#c5a574] pt-[12px] flex flex-col gap-[10px]'>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  TAX:50,000₮
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  Round Robin Best of 3
                </p>
                <p
                  className={`${introFont.className} text-[#000]  text-[14px] uppercase`}>
                  2025-03-30 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full min-h-screen flex justify-center px-6 md:px-24 pb-60'>
          <div className='container grid grid-cols-1 md:grid-cols-3 grid-rows-auto border-2 rounded-3xl border-[#c5a574] overflow-hidden '>
            {/* Image Section */}
            <div className='col-span-1 md:col-span-3 row-span-3 border-b-2 border-[#c5a574] md:border-0'>
              <img
                className='w-full h-full object-cover'
                src='/images/b3f75580-f2f8-4f2f-ad3f-b2d3c9c32f85.png'
                alt='Prize Image'
              />
            </div>

            {/* Prize Amount */}
            <div className='row-span-1 flex flex-col justify-center gap-4 px-6 md:px-12 border-b-2 border-[#c5a574] md:border-0 text-left md:text-center py-[18px]'>
              <h1
                className={`${introFont.className} font-bold text-xl md:text-2xl text-[#c5a574]`}>
                Шагналийн сан
              </h1>
              <p
                className={`${introFont.className} text-[#CB4154] text-3xl md:text-4xl lg:text-5xl uppercase font-bold`}>
                1,450,000₮
              </p>
            </div>

            {/* Live Broadcast */}
            <div className='row-span-1 border-b-2 border-[#c5a574] md:border-x-2 md:border-b-0 border-[#c5a574] px-6 md:px-12 flex flex-col justify-center gap-4 text-left py-[18px]'>
              <h1
                className={`${introFont.className} font-bold text-xl md:text-2xl text-[#c5a574]`}>
                Шууд дамжуулалт
              </h1>
              <p
                className={`${introFont.className} text-[#000] text-lg md:text-xl uppercase`}>
                Тэмцээнийг Indra Institute Facebook хуудсаар шууд дамжуулалтаар
                үзүүлнэ.
              </p>
            </div>

            {/* Location */}
            <div className='row-span-1 px-6 md:px-12 flex flex-col justify-center gap-4 text-left py-[24px]'>
              <h1
                className={`${introFont.className} font-bold text-xl md:text-2xl text-[#c5a574]`}>
                Байршил
              </h1>
              <p
                className={`${introFont.className} text-[#000] text-lg md:text-xl uppercase`}>
                Ard Ayush Ave Apartment 23B, СБД - 7 хороо, Улаанбаатар 14192
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className='w-full '>
        <div className='w-full  bg-[#f5f5f5] flex justify-center'>
          <div className='container flex flex-col justify-center h-full  items-center gap-[24px] md:flex-row'>
            <div className='flex-1 flex flex-col h-[300px] items-center justify-center gap-[24px]'>
              <h1
                className={`${introFont.className}  text-[20px] text-start   uppercase   text-[#CB4154] `}>
                Анхаар
              </h1>
              <p
                className={`${introFont.className} text-[#000] text-lg md:text-xl uppercase`}>
                Тэмцээн 2025 оны 3-р сарын 29-нд өглөө 9 цагаас эхлэх бөгөөд
                цагаасаа хоцорсон багууд хасагдахын анхаарна уу
              </p>
            </div>
            <div className='flex-1  py-[24px] '>
              <h1
                className={`${introFont.className}     text-[20px]   uppercase  text-[#CB4154] `}>
                Байршил
              </h1>
              <iframe
                className='rounded-3xl h-full'
                height='300'
                src='https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d21388.80453153578!2d106.8967831471961!3d47.9247657081016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d47.9212207!2d106.90939379999999!4m3!3m2!1d47.928531199999995!2d106.9254524!5e0!3m2!1smn!2smn!4v1742980100797!5m2!1smn!2smn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                width='100%'
                style={{border: 0}}
                allowFullScreen
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div className='w-full h-[300px] bg-[#0000] flex flex-col items-center py-10'>
          <h1
            className={`${myFont.className} absolute z-40   text-4xl text-center  md:text-5xl uppercase `}>
            flow us on social media
          </h1>
        </div>
        <div className='h-[50px] bg-[#c5a574] flex  justify-center items-center'>
          <h1
            className={`${myFont.className}   text-[20px] text-center   uppercase  text-center `}>
            © 2025 INDRA E-sports Tournament
          </h1>
        </div>
      </footer>
    </>
  );
}
