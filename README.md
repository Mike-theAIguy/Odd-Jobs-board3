# Odd Jobs Board (Open Posting)

Routes:
- `/` — Home with two big colorful buttons (Post / The Board)
- `/post` — Post a job (no login required)
- `/board` — Browse/search jobs

## Environment Variables (Vercel)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Supabase Table
Table: `jobs`
- `id` uuid (pk, default: gen_random_uuid())
- `title` text
- `description` text
- `created_at` timestamptz (default: now())

### RLS Policies (open posting)
Enable RLS, then add:
- **Select for everyone:** `true`
- **Insert for anonymous:** `auth.role() = 'anon'`

