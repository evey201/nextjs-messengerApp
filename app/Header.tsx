import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';

export default function Header() {
    const session = true;
    if (session) {
        return (
            <header className='sticky top-0 flex bg-white justify-between items-center p-10 shadow-sm'>
                <div className='flex space-x-2'>
                    <Image 
                        className='rounded-full mx-2 object-contain'
                        height={10}
                        width={50}
                        src="https://links.papareact.com/jne" 
                        alt="profile picture"
                    />
                    <span>
                        <p className='text-blue-400'>Logged in as: </p>
                        <p className='font-bold text-lg'>Evey</p>
                    </span>
                </div>

                <LogoutButton />
            </header>
        )
    }
  return (
    <header className='sticky top-0 flex bg-white justify-center items-center p-10 shadow-sm'>
        <div className='flex flex-col items-center space-y-5'>
            <div className='flex items-center space-x-2'>
                <Image src="https://links.papareact.com/jne" alt="logo" height={10} width={50} />
                <p>Welcome to Evey's meta messenger app</p>
            </div>
            <Link className='bg-blue-500 rounded text-white font-bold hover:bg-blue-700 py-2 px-4' href='/auth/sign-in'>Sign in</Link>
        </div>
    </header>
  )
}
