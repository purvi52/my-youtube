import React,{useState, useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import {useDispatch, useSelector} from "react-redux"
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setliveMessages]= useState();

    const dispatch= useDispatch();

    const chatMessages = useSelector((store)=>store.chat.messages)

    useEffect(() => {
        const i= setInterval(()=>{
            console.log("API POLLING");
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20),
            }))
       
       
        },2000); 
      return () => {
        clearInterval(i)
      }
    }, [])
    
  return (
        <>
      <div className='h-[450px] w-full ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
         <div>
         {chatMessages.map((c,i)=><ChatMessage 
         key={i}
          name={c.name}
          message={c.message}
          />)}
      </div>
      </div>
      <form className='w-fullp-2 ml-2 border border-black ' onSubmit={(e)=> {
        e.preventDefault();
        console.log("On submit: ",liveMessage)
        dispatch(addMessage({
            name:"Purvi",
            message:liveMessage
        }))}}>
        <input className="w-80 p-1 px-2 hover:border border-blue-300" type="text" value={liveMessage} 
            onChange={(e)=>setliveMessages(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>send</button>
      </form>
      </>
  ) 
}

export default LiveChat