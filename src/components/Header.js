import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  return (
    <>
    
    <header className='flex items-center justify-between bg-black text-white p-5 navcolor'>
     <div className="logo">
         <Link to="/">
             <h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>Anjana Ramesh</h2>
         </Link>
     </div>
        <nav className='navcolor'>
            <ul className='flex'>
                <li className='mr-5 lg:text-lg'>
                    <button className='btncolor'>
                        <Link className='linkcolor' to="/">Home</Link>
                        </button>
                    </li> 
                 <li className='lg:text-lg'>
                    <button className='btncolor'>
                        <Link to="/blog">Blog</Link>
                        </button>
                        </li>
            </ul>
        </nav>
    </header>
    </>
  )
} 
