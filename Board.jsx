import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Board() {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  async function fetchJobs() {
    setLoading(true)
    let query = supabase.from('jobs').select('*').order('created_at', { ascending: false })
    if (search.trim()) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`)
    }
    const { data, error } = await query
    if (!error) setJobs(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchJobs() }, [])
  useEffect(() => { const t = setTimeout(fetchJobs, 300); return () => clearTimeout(t) }, [search])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">The Board</h2>
        <Link to="/" className="text-sm text-sky-600 hover:underline">Home</Link>
      </div>
      <div className="mb-4">
        <input className="w-full border rounded-xl px-3 py-2" placeholder="Search jobs…" value={search} onChange={e=>setSearch(e.target.value)} />
      </div>
      {loading ? <div className="text-slate-600">Loading…</div> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.length === 0 && <div className="text-slate-500">No jobs yet. Be the first to post!</div>}
          {jobs.map(j => (
            <div key={j.id} className="rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="p-4 border-b border-slate-100">
                <div className="text-lg font-semibold">{j.title}</div>
                <div className="text-xs text-slate-500">{new Date(j.created_at).toLocaleString()}</div>
              </div>
              <div className="p-4">
                <p className="text-sm leading-6 whitespace-pre-wrap">{j.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
