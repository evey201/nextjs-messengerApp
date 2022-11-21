"use client";
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Message } from '../typings';
import useSWR from 'swr'
import fetcher from '../utils/fetchMessages';


const ChatInput = () => {
    const [input, setInput] = useState("");
    
    const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
    console.log(messages)

    const addMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log("triggered")
        if (!input) return;

        const messageToSend = input;
        setInput('');

        const id = uuid();
        
        const message: Message = {
            id,
            message: messageToSend,
            created_at: Date.now(),
            userName: 'Evey201',
            email: 'evey.alabi@gmail.com',
            profile_pic: "https://scontent.fada2-2.fna.fbcdn.net/v/t1.6435-9/89858736_10219681338418354_8984255737014255616_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Lx-PFkJ5RiYAX__gwgQ&_nc_ht=scontent.fada2-2.fna&oh=00_AfDHjhVvKjlRvhSNqIr1mHq6aggq53hIA_cKB_-RDTBQnQ&oe=63A0CCB0"
        }

        const uploadMessage = async () => {
            let url = "/api/addMessage"
            const data = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    message
                })
            }).then(res => res.json());
            
            return [data.message, ...messages!]
            console.log("message uploaded:: ", data)
        }

        await mutate(uploadMessage, {
            optimisticData: [message, ...messages!],
            rollbackOnError: true,
        })
    } 
  return (
    <>
        <form onSubmit={addMessage} className='fixed bottom-0 z-50 px-10 py-5 flex space-x-2 w-full'>
            <input
                className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter message here..."
            />
            <button
                className='disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 rounded text-white font-bold hover:bg-blue-700 py-2 px-4'
                type='submit'
                disabled={!input}
            >
                Send
            </button>
        </form>
    </>
  )
}

export default ChatInput
