import { Pool } from 'pg'

const isProduction = process.env.NODE_ENV === 'production'
console.log('DATABASE_URL:', process.env.DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ...(isProduction && {
    ssl: { rejectUnauthorized: false }
  })
})

export default pool

const query = (text: string, params?: any[]) => pool.query(text, params)
export const getClient = () => pool.connect()
