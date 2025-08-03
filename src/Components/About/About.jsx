export default function Home(){
    return <>
    <div className="flex flex-col items-center min-h-screen justify-center  bg-[#1ABC9C] text-white pb-10">
     
     
    
      <h1 className="text-white text-9xl font-extrabold ">ABOUT COMPONENT</h1>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-20 h-1 bg-white rounded"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    
        <div className="w-20 h-1 bg-white rounded"></div>
      </div>
       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8  text-lg text-left">
        <div>
               <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </p>
               </div>
                 <div>
               <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
               </p>
               </div>
       </div>
       
    </div>
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
}