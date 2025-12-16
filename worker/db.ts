import { ENV } from './src/env'
// src/db.ts
import { Pool } from 'pg'
console.log(ENV.DATABASE_URL)

export const pool = new Pool({
  connectionString: ENV.DATABASE_URL, // Get from Supabase → Project Settings → Database
  ssl: { rejectUnauthorized: false } // needed for Supabase cloud
})
console.log(ENV.DATABASE_URL)
// Optional: test the connection once on startup
pool
  .connect()
  .then(client => {
    console.log('✅ Connected to Supabase Postgres')
    client.release()
  })
  .catch(err => {
    console.error('❌ Database connection error:', err)
  })
