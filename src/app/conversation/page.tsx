"use client"
import React, { useState } from 'react'
import { BsArrowUpSquareFill } from "react-icons/bs";
import { motion } from 'motion/react';

function Chat() {
    const [model, setModel] = useState("GPT-3.5");

    return (
        <div className="flex relative flex-col items-center h-full px-4">


            {/* Input Container */}
            <motion.div initial={{ translateY: -400 }} animate={{ translateY: 0 }} className="flex flex-col fixed bottom-10 sm:flex-row items-center px-5 dark:bg-gray-800 bg-gray-200 
             w-full sm:w-2/3 md:w-1/2 max-w-xl rounded-3xl shadow-md py-2 gap-2">

                {/* Model Selector */}
                <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="px-2 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 bg-gray-100 
                       text-gray-800 dark:text-white text-sm focus:outline-none w-full sm:w-auto"
                >
                    <option value="GPT-3.5">GPT-3.5</option>
                    <option value="GPT-4">GPT-4</option>
                    <option value="Custom">Custom</option>
                </select>

                {/* Input + Button (flex row) */}
                <div className="flex items-center w-full">
                    <input
                        className="px-3 py-2 bg-transparent dark:text-white text-black text-md outline-none w-full"
                        placeholder={`Ask Here (Using ${model})`}
                    />
                    <BsArrowUpSquareFill
                        className="cursor-pointer dark:text-white ml-2 flex-shrink-0 hover:text-orange-500 transition"
                        size={28}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Chat
