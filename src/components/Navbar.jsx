import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200  '>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">


     <div className="logo font-bold text-2xl">
      <span className='text-purple-500 '>  &lt;</span>
   
      <span>Pass</span>
      <span className='text-purple-500'>OP/ &gt;</span>
      </div> 
     <ul>
      <li className='flex gap-4 '>
        <a className='hover:font-bold' href="#">Home</a>
        <a className='hover:font-bold'  href="#">Contact</a>
        <a className='hover:font-bold'  href="#">About</a>
      </li>
     </ul>
     <button className='text-white bg-purple-500 my-5 rounded-full flex justify-between items-center'>
      <img className="invert p-1  w-10 " src="icons/github.jpeg" alt="github logo" />
      <span className='font-bold px-2'>GitHub</span>
 
     </button>
     </div>
    </nav>
  )
}

export default Navbar
