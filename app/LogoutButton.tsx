"use client";

export default function LogoutButton() {
  return (
    <button 
        className='bg-blue-500 rounded text-white font-bold hover:bg-blue-700 py-2 px-4'
        onClick={() => console.log('works')}
    >
        Sign out
    </button>
  )
}
