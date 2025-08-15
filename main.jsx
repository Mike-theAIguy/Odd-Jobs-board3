import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Post from './pages/Post'
import Board from './pages/Board'

const root = document.getElementById('root')
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
