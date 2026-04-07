"use client";

import { useRef } from "react";


const Profile = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div className="flex flex-col bg-yellow-200 h-full items-center">
      <h1 className="flex bg-red-200 p-10">This is Profile Page</h1>
      <div className="flex flex-col bg-white w-[63%] rounded-4xl p-4 shadow-md focus-within:shadow-xl transition">
       <textarea
          ref={textareaRef}
          onInput={handleInput}
          rows={1}
          placeholder="Write something..."
          className="outline-none resize-none text-xl w-full overflow-hidden"
        />
      </div>
      <button className="h-8 w-[20%] text-white mt-4">post</button>
    </div>
  );
}

export default Profile;