import React, { useState } from 'react'

const Navbar = () => {
  const navLinks = [
    { id : 1,
      title : "work",
      specificClass : 'activeBtn'
    },
    {
      id : 2,
      title : "Services",
      specificClass : 'notActive'
    },
    {
      id : 3,
      title : "Contact",
      specificClass : 'activeBtn'
    },
    { 
      id : 4,
      title : "About",
      specificClass : 'notActive'
    },
  ]
  const [navLinkStatus , setnavLinkStatus ] = useState(true)
  const functionForChangingBg = ()=> {
    navLinks.forEach((item)=> {
      if(navLinkStatus) {
        if(item.id % 2 == 0) {
          item.specificClass = 'notActive'
        }
        else {
          item.specificClass = 'activeBtn'
        }
      }
      else {
        if(item.id % 2 != 0) {
          item.specificClass = 'notActive'
        }
        else {
          item.specificClass = 'activeBtn'
        }
      }
    })
  }
  
  functionForChangingBg()
  return (
    <div className='h-[100px] w-full flex justify-between items-end px-4'>
      <img className='absolute mb-7 ms-[350px] w-[140px] start' src="/start.png" alt="" />
      {/* logo  */}
      <div className="logo h-full flex items-end">
        <img className='w-[130px]' src="/Logo.png" alt="" />
      </div>
      {/* links  */}
      <div className='navLinks h-[40px] w-[500px] border-[1px] border-stone-400 rounded-3xl flex items-center justify-between px-0 bg-black'>
        {navLinks.map((item,index)=> (
           <a key={index} className={`${item.specificClass} text-black px-6 py-2 rounded-3xl h-full flex items-center justify-center`} href="">{item.title}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar