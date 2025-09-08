"use client";
import React from "react";

type HeaderProps = {
  onNavigate: (page: string) => void;
  onLogin: () => void;
  onOpenRegister: () => void;
};

export default function Header({ onNavigate, onLogin, onOpenRegister }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      {/* Left side: Logo / App name */}
      <div
        className="font-bold text-lg cursor-pointer"
        onClick={() => onNavigate("search")}
      >
        DevIssues
      </div>

      {/* Center: Solution Registration Button */}
      <button
        onClick={onOpenRegister}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
      >
        Register Solution
      </button>

      {/* Right side: Icons */}
      <div className="flex items-center space-x-4">
        {/* Hamburger menu */}
        <button onClick={() => alert("Menu clicked!")}>☰</button>
        {/* User icon */}
        <button onClick={onLogin}>👤</button>
      </div>
    </header>
  );
}
