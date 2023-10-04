import React from 'react'
import { useSelector } from "react-redux"; 
import {Link} from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
    //this is knownas earlyy return 
    // if(!isMenuOpen) return null; 
  return !isMenuOpen ? null :(
    <div className="p-6 shadow-2xl w-52">
        <ul >
            <li><Link to="/">Home</Link></li>
            <li>
          <Link to="/demo">Demo</Link>
        </li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-4'>Subscriptions</h1>
        <ul className='font-medium'>
            <li>Sports</li>
            <li>Music</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-4'>Watch Later</h1>
        <ul className='font-medium'>
            <li>Sports</li>
            <li>Music</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar