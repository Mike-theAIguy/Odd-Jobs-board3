import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow">Odd Jobs Board</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link to="/post" className="bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl transform hover:scale-105 transition">
          Post
        </Link>
        <Link to="/board" className="bg-sky-500 hover:bg-sky-600 text-white text-2xl font-bold px-12 py-6 rounded-full shadow-xl transform hover:scale-105 transition">
          The Board
        </Link>
      </div>
    </div>
  )
}
