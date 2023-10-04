import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import { useSearchParams } from "react-router-dom"  
import { closeMenu } from '../utils/appSlice';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {
    const [searchParams]=useSearchParams();

    const dispatch=useDispatch();
    useEffect(()=>{ 
          dispatch(closeMenu()) 
    },[])
  return (
    <div className='w-full'>
    <div className='px-5 flex'>
        <div>
        <iframe
        width="1000"
        height="450"
        src={"https://www.youtube.com/embed/"+searchParams.get("v") }
        title="Youtube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
        <div className='w-full'>
            <LiveChat/>
        </div>
    </div>
    <CommentContainer/>
    </div>
  )
}

export default WatchPage;