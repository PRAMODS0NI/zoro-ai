import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

function page() {
  return (
    <div className="flex flex-col items-center mt-50 md:mt-60 h-full text-center px-6">

      <h1 className="text-4xl md:text-5xl font-bold font-mono dark:text-white mb-4">
        Welcome to Zoro AI
      </h1>

      <p className="text-gray-700 dark:text-gray-200 text-md max-w-xl">
        Start your first conversation by clicking the{" "}
        <span className="inline-flex items-center gap-1 font-semibold text-orange-500">
          <BsPlusCircleFill size={20} /> New Chat
        </span>{" "}
        button in the sidebar.
      </p>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Tip: You can explore past chats anytime from the &quot;Chats&quot; section.
      </p>


    </div>
  );
}

export default page
