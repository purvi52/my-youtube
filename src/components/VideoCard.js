import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info?.snippet);
    const {snippet,statistics}=info;
    const {channelTitle, title, thumbnails}=snippet;


  return (
    <div className='w-72 px-2 mx-2 my-2 shadow-lg'>
        <img className='rounded-lg' alt="video" src={thumbnails.medium.url} /> 
        <ul>
            <li className='font-semibold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard=({info})=>{
    return (
            <div className='p-1 m-1 border border-blue-800'>
            <VideoCard info={info}/>
            </div>
        
    )
}

export default VideoCard;