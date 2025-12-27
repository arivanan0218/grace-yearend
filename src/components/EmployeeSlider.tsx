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

    </div>
  );
}
