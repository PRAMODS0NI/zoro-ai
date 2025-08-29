import React from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
    return (
        <div className='h-[6vh] transition duration-300 overflow-hidden flex bg-gray-200 dark:bg-gray-800 w-full'>
            <div className='w-full h-full flex items-center pl-15 px-5'>
                <span className='font-mono text-2xl dark:text-white mr-auto md:mx-auto'>Zoro AI</span>

                <div className='flex items-center justify-center h-full'>

                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar