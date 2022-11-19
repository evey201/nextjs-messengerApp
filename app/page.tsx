import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function page() {
  return (
    <main>
        <MessageList />
        <ChatInput />
    </main>
  )
}
