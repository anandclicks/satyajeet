import React from 'react'

const Navbar = () => {
  const navLinks = [
    {
      title : "work",
      specificClass : 'activeBtn'
    },
    {
      title : "Services",
      specificClass : ''
    },
    {
      title : "Contact",
      specificClass : 'activeBtn'
    },
    {
      title : "About",
      specificClass : ''
    },
  ]
  return (
    <div className='h-[100px] w-full flex justify-between items-end px-4'>
      <img className='absolute mb-7 ms-[350px] w-[140px] start' src="public/start.png" alt="" />
      {/* logo  */}
      <div className="logo h-full flex items-end">
        <img className='w-[130px]' src="public\Logo.png" alt="" />
      </div>
      {/* links  */}
      <div className='navLinks h-[40px] w-[500px] border-[1px] border-stone-400 rounded-3xl flex items-center justify-between px-0 bg-black'>
        <a className='activeBtn primaryBg text-black px-6 py-2 rounded-3xl h-full flex items-center justify-center' href="">Work</a>
        <a className=' text-white px-6 py-2 rounded-3xl h-full flex items-center justify-center' href="">Services</a>
        <a className='activeBtn primaryBg text-black px-6 py-2 rounded-3xl h-full flex items-center justify-center' href="">Contact</a>
        <a className=' text-white px-6 py-2 rounded-3xl h-full flex items-center justify-center' href="">About</a>
      </div>
    </div>
  )
}

export default Navbar