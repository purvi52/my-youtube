import React,{useEffect, useState} from 'react'
import VideoCard,{AdVideoCard} from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import {Link} from "react-router-dom"; 

const VideoContainer = () => {
    const [videos, setVideos]= useState([ ])
    useEffect(()=> {
        getVideos();
    },[])

    const getVideos=async()=>{
        const data= await fetch(YOUTUBE_VIDEOS_API); 
        const json=await data.json();
        // console.log(json.items);
        setVideos(json.items)
    }
    
  return (
    <div className='flex flex-wrap m-4 '>
    {videos[0] && <AdVideoCard info={videos[0]}/>} 
    {videos.map(video=>
    <Link to={"/watch?v="+video.id} key={video.id}>
    <VideoCard  info={video}/>
    </Link>
    )}
       
    </div>
  )
}
//http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iphone

export default VideoContainer