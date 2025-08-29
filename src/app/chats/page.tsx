"use client";
import React from "react";
import { chats } from "@/constants/chats";

function ChatsPage() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6">Your Chats</h1>
            <div className="flex flex-col gap-4">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        className="p-4 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition cursor-pointer"
                    >
                        <h2 className="font-semibold text-lg mb-1">{chat.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {chat.lastMessage}
                        </p>
                        <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatsPage;
