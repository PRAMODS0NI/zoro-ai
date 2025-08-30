"use client"
import React, { useState } from 'react'
import { RiSidebarUnfoldFill } from "react-icons/ri";
import { RiSidebarFoldFill } from "react-icons/ri";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import Link from 'next/link';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "New Chat", icon: <BsPlusCircleFill size={25} className="text-orange-600" />, href: "/chat?new=true" },
    { label: "Chats", icon: <IoChatboxOutline size={25} className="dark:text-white" />, href: "/chats" }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`h-screen hidden md:block bg-gray-200 dark:bg-gray-800 shadow-md transition-all duration-300 ${open ? 'w-20' : 'w-56'}`}>
        <div className='flex items-center p-5 gap-3'>
          {open ? <RiSidebarUnfoldFill onClick={() => setOpen(!open)} className='cursor-pointer dark:text-white flex-shrink-0' size={25} />
            : <RiSidebarFoldFill onClick={() => setOpen(!open)} className='cursor-pointer dark:text-white flex-shrink-0' size={25} />}
          <Link href="/"
            className={`font-medium text-2xl whitespace-nowrap dark:text-white transition-all duration-200 
  ${open ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
            Zoro
          </Link>
        </div>
        <div className='flex-col flex'>
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className='flex items-center w-full group cursor-pointer pl-5 py-4 hover:bg-gray-100 dark:hover:bg-gray-900 gap-2'>
              {item.icon}
              <span className={`font-medium ${open ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'} ${i === 0 ? 'text-orange-600' : 'dark:text-white'}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <RiSidebarUnfoldFill onClick={() => setOpen(!open)} className='cursor-pointer md:hidden h-[6vh] absolute left-5 top-0 z-50 dark:text-white' size={25} />

      {/* Overlay when menu is open */}
      {open && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)} />}

      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-200 dark:bg-gray-800 shadow-md z-50 transform transition-transform duration-300 md:hidden
        ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-5 flex items-center gap-3'>
          <Link href="/" onClick={() => setOpen(false)} className="font-medium text-2xl dark:text-white">ZORO</Link>
        </div>
        <div className='flex-col flex'>
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className='flex items-center w-full group cursor-pointer pl-5 py-4 hover:bg-gray-100 dark:hover:bg-gray-900 gap-2'
            >
              {item.icon}
              <span className={`font-medium ${i === 0 ? 'text-orange-600' : 'dark:text-white'}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar;
