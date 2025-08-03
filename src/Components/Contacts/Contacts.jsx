import React from 'react'

export default function Contacts() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

        <div className="flex flex-col items-center mb-8">
          <h1 className="text-[#2C3E50] text-3xl font-extrabold mb-4">
            CONTACT SECTION
          </h1>

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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <div className="w-20 h-1 bg-[#2C3E50] rounded"></div>
          </div>
        </div>
        <form className=" rounded-lg p-8 w-full max-w-md ">

          <div className="relative mb-6">
            <input
              type="text"
              id="username"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 focus:border-green-500 focus:outline-none"
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              UserName
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="number"
              id="age"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            />
            <label
              htmlFor="age"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >UserAge
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >UserEmail
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >UserPassword
            </label>
          </div>
         <button
              type="submit"
              className="px-6 py-3 bg-[#1ABC9C] text-white text-lg rounded-full shadow-md hover:bg-[#1a252f] transition-all duration-300"
              >
            Send Message
             </button>


        </form>
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
  )
}
