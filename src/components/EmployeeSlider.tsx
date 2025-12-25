"use client";

import { useState, useEffect } from "react";
import { employees } from "@/data/employees";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % employees.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + employees.length) % employees.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Cards Container */}
      <div className="absolute inset-0">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {employees.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-12 h-4 bg-teal-600"
                : "w-4 h-4 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
