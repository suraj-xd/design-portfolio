"use client"

import { AlarmIcon, LightningIcon, PlusCircleIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto">
      {/* Main heading */}
      <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
       {" Hey it's,"}
      </h1>
      
      {/* Profile Card */}
      <div className="bg-[#1b1b1b] border-2 border-[#333333] shadow-2xl rounded-[40px] p-6 relative overflow-hidden z-[1]">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#89F336] rounded-full"></div>
          <span className="text-gray-400 text-sm">Available for work</span>
          <div className="ml-auto text-gray-400 text-xs flex items-center gap-1"><AlarmIcon size={16} /> 7:15PM</div>
        </div>
        
        {/* Profile section */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="/gradient.png" 
              alt="Jay Dwivedi" 
              width={48} 
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold">Hritu Gaur</h2>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>Designer</span>
              <span>IIIT Delhi</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#393E46] shadow-2xl text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors font-medium">
            <PlusCircleIcon size={16} />
            Hire Me
          </button>
          <button className="bg-black shadow hover:bg-gray-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Email
          </button>
        </div>
        
        {/* Status bar at bottom */}
        
      </div>
      <div className="bg-[#89F336] rounded-[40px] relative -top-16 pt-20 flex justify-center p-3 text-black font-medium text-sm items-center gap-2 shadow-inner border-2 border-[#A5DF00]">
        <LightningIcon size={16} />
          Currently High on Creativity
        </div>
      {/* Bottom text with emojis and floating elements */}
      <div className="mt-12 relative">
        <div className="text-6xl font-bold text-gray-400 leading-tight">
          <div className="flex items-center gap-4 mb-2">
            <span>I turn caffeine</span>
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-2xl">☕</div>
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-xl">💻</div>
            </div>
            <span>and</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span>chaos into</span>
            <div className="w-16 h-12 bg-gray-200 rounded-lg"></div>
            <span>clean design.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Pixel nerd, idea chaser, and</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span>music head</span>
            <div className="w-20 h-10 bg-black rounded-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="text-white text-xs">Now Playing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 