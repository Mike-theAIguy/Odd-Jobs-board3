import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Post() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { error } = await supabase.from('jobs').insert({ title, description })
      if (error) throw error
      navigate('/board')
    } catch (err) {
      setError(err.message || 'Failed to post job')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Post a Job</h2>
        <Link to="/" className="text-sm text-sky-600 hover:underline">Home</Link>
      </div>
      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input className="w-full border rounded-xl px-3 py-2" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Assemble a bookshelf" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea className="w-full border rounded-xl px-3 py-2 min-h-[120px]" value={description} onChange={e=>setDescription(e.target.value)} placeholder="What, when, where, pay…" required />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={loading} className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-semibold px-5 py-2 rounded-xl">
          {loading ? 'Posting…' : 'Post Job'}
        </button>
      </form>
    </div>
  )
}
