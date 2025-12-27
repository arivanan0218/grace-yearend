"use client";

import { Employee } from "@/data/employees";
import Image from "next/image";

interface EmployeeCardProps {
  employee: Employee;
  isActive: boolean;
}

export default function EmployeeCard({ employee, isActive }: EmployeeCardProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Company Info */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-teal-700 via-emerald-600 to-green-500 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/30 rounded-lg transform rotate-12 animate-float"></div>
            <div className="absolute top-32 right-20 w-24 h-24 border-4 border-white/20 rounded-lg transform -rotate-12 animate-float-delayed"></div>
            <div className="absolute bottom-20 left-32 w-20 h-20 border-4 border-white/25 rounded-lg transform rotate-45 animate-float-slow"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white/20 rounded-lg transform rotate-90 animate-float-reverse"></div>
            <div className="absolute bottom-32 right-32 w-28 h-28 border-4 border-white/15 rounded-lg transform -rotate-6 animate-float-bounce"></div>
          </div>

          {/* Hand Image Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDUwbDIwIDMwIDMwLTEwIDEwIDQwLTIwIDIwLTMwLTEwLTIwIDMwLTMwLTIwIDEwLTQwIDMwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] bg-repeat"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16">
            {/* Logo */}
            <div className={isActive ? "" : "opacity-0"}>
              <div className="mb-2 sm:mb-4">
                <Image
                  src="/assets/GClogo2.png"
                  alt="Grace Construction Logo"
                  width={192}
                  height={192}
                  className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto invert"
                  priority
                />
              </div>
            </div>

            {/* Company Name */}
            <div className={isActive ? "" : "opacity-0"}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                Grace<br />Construction
              </h1>
              <div className={`h-1 sm:h-1.5 md:h-2 w-20 sm:w-24 md:w-32 bg-white rounded-full ${isActive ? "" : "opacity-0"}`}></div>
            </div>

            {/* Website */}
            <div className={`flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap ${isActive ? "" : "opacity-0"}`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white font-medium break-all">graceconstruction.lk/</span>
              <div className="hidden md:flex w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-full items-center justify-center ml-1 sm:ml-2 flex-shrink-0">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex gap-1.5 sm:gap-2 ${isActive ? "" : "opacity-0"}`}>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full animate-pulse-glow"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full animate-pulse-glow animation-delay-300"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full animate-pulse-glow animation-delay-600"></div>
          </div>
          
          {/* Additional decorative elements */}
          <div className={`absolute bottom-8 left-8 flex gap-3 ${
            isActive ? "animate-bounce-in animation-delay-500" : "opacity-0"
          }`}>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-slow"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-slow animation-delay-200"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-slow animation-delay-400"></div>
          </div>
        </div>

        {/* Right Side - Employee Info */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-teal-100 to-green-100 rounded-full opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          {/* Employee Content */}
          <div className={`relative z-10 flex flex-col items-center py-4 sm:py-6 md:py-8 ${isActive ? "" : "opacity-0"}`}>
            {/* Photo with animated border */}
            <div className="relative mb-4 sm:mb-6 md:mb-10 lg:mb-16 mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-float-subtle">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-emerald-500 to-green-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-teal-500 to-emerald-600 rounded-full animate-spin-reverse opacity-50"></div>
              
              {/* Pulsing ring effect */}
              <div className="absolute inset-0 rounded-full animate-ping-slow opacity-20 bg-teal-500"></div>
              
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl m-1 sm:m-1.5 md:m-2 animate-glow">
                <div className="w-full h-full relative">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    fill
                    className="object-cover animate-zoom-pulse object-[50%_25%]"
                    priority
                  />
                  
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 animate-shimmer">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full"></div>
                  </div>
                  
                  {/* Rotating sparkles */}
                  <div className="absolute inset-0 animate-spin-very-slow opacity-60">
                    <div className="absolute top-4 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 left-4 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 right-4 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name */}
            <h2 className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 text-center leading-tight animate-subtle-pulse max-w-32rem sm:max-w-md md:max-w-lg lg:max-w-xl ${isActive ? "" : "opacity-0"}`}>
              {employee.name}
            </h2>

            {/* Position */}
            <p className={`text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-600 font-medium text-center animate-fade-pulse ${isActive ? "" : "opacity-0"}`}>
              {employee.position}
            </p>
            
            {/* Decorative shine effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -inset-full animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
