import React, { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import img4 from '../../assets/poert1.png';
import img5 from '../../assets/port2.png';
import img6 from '../../assets/port3.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6];

  return (<>
    <section className="bg-white py-16">
     
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[#2C3E50] text-3xl font-bold uppercase mb-4">
          PORTFOLIO COMPONENT
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-20 h-1 bg-[#2C3E50] rounded"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#2C3E50"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2C3E50"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.5a.562.562 0 011.04 0l2.13 5.11c.07.17.24.29.43.3l5.52.44a.56.56 0 01.32.99l-4.2 3.6c-.14.12-.2.31-.18.5l1.28 5.39a.56.56 0 01-.84.61l-4.73-2.89a.56.56 0 00-.59 0L6.98 20.54a.56.56 0 01-.84-.61l1.28-5.38a.56.56 0 00-.18-.5L3.04 10.39a.56.56 0 01.32-.99l5.52-.44a.56.56 0 00.43-.3L11.48 3.5z"
            />
          </svg>
          <div className="w-20 h-1 bg-[#2C3E50] rounded"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(src)}
            >
              
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-[#1ABC9C]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white text-[#1ABC9C] rounded-full w-14 h-14 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-[50%] max-h-[70vh] rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
    <div className="bg-[#2c3e50] text-white py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

    
    <div>
      <h3 className="text-2xl font-bold mb-4">LOCATION</h3>
      <p>
        2215 John Daniel Drive<br />
        Clark, MO 65243
      </p>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">AROUND THE WEB</h3>
      <div className="flex justify-center gap-4">
        <a href="#" style={{textDecoration:"none"}}className="w-12 h-12 flex items-center justify-center border border-white rounded-full no-underline text-white text-2xl bg-transparent">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" style={{textDecoration:"none"}} className="w-12 h-12 flex items-center justify-center border border-white rounded-full no-underline text-white text-2xl bg-transparent">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#"style={{textDecoration:"none"}} className="w-12 h-12 flex items-center justify-center border border-white rounded-full no-underline text-white text-2xl bg-transparent">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#"style={{textDecoration:"none"}} className="w-12 h-12 flex items-center justify-center border border-white rounded-full no-underline text-white text-2xl bg-transparent">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">ABOUT FREELANCER</h3>
      <p className="max-w-xs mx-auto">
        Freelance is a free to use, MIT licensed Bootstrap theme created by
        Start Bootstrap.
      </p>
    </div>

  </div>

</div>
<footer className='bg-[#1A252F] text-white text-center py-4 text-sm'>
Copyright © Your Website 2021
</footer>
    




    


    </>
  );
}
