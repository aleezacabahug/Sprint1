import React from 'react';
import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold">Weekly Planner</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/">Dashboard</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/tasks">Tasks</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  );
}