"use client";
import React, { useState } from 'react'

const ChatInput = () => {
    const [data, setData] = useState("");

    const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log("triggered")
        if (!data) return;

        const messageToSend = data;
        setData('');
    } 
  return (
    <>
        <form onSubmit={addMessage} className='fixed bottom-0 z-50 px-10 py-5 flex space-x-2 w-full'>
            <input
                className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter message here..."
            />
            <button
                className='disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 rounded text-white font-bold hover:bg-blue-700 py-2 px-4'
                type='submit'
                disabled={!data}
            >
                Send
            </button>
        </form>
    </>
  )
}

export default ChatInput
