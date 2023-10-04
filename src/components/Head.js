import React,{useState,useEffect } from 'react';
import {useDispatch,useSelector } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachedResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery]= useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions, setShowSuggestions]= useState(false); 
    const searchCache=useSelector(store=>store.search)
    useEffect(()=>{
        console.log(searchQuery);
        const timer=setTimeout(()=>
        {
            if(searchCache[searchQuery])
            {
                setShowSuggestions(searchCache[searchQuery]);
            }
            else
            {
                getSearchSuggestions()
            }
        },200)

        return()=>{ 
            clearTimeout(timer )

        }

    },[searchQuery]) 

    const getSearchSuggestions=async ()=>{
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json= await data.json();
        console.log(json[1]);
        setSuggestions(json[1])

        //updatecache
        dispatch(cachedResults({
            [searchQuery]:json[1]
        }))

    }

    const dispatch= useDispatch();
    const toggleMenuHandler =( )=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-xl'>
    <div className='flex col-span-2 cursor-pointer'>
        <img className='h-8' alt="hamburger-menu" onClick={()=>toggleMenuHandler()}
        src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" />
        <img className="h-7 mx-2" alt="youtube-logo"
        src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" />
    </div>
    <div className='h-6 mt-0 col-span-9 ml-28'>
        <input className="p-1 px-6  w-1/2 border border-gray-500 rounded-l-full" type="text" 
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true )}
            onBlur={()=>setShowSuggestions(false )}
         />
        <button className='p-1 border border-gray-500 rounded-r-full px-5 bg-gray-100'> 🔍</button>
    
    {showSuggestions &&  <div className='absolute  bg-white py-2  w-[27rem] shadow-lg rounded-lg border border-gray-100 '>
    <ul>
        {suggestions.map(suggestion =>
            <li key={suggestion} className='font-medium py-1 px-3  shadow-sm hover:bg-gray-100'>{suggestion} </li>)}
             
    </ul>
     </div>}
    </div>
    <div className='col-span-1'>
        <img className="h-8" alt="user-icon" src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"/>
    </div>
    </div>
  )
}

export default Head;