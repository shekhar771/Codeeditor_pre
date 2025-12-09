import dotenv from 'dotenv'
dotenv.config()

if (!process.env.GOOGLE_CLIENT_ID) {
  console.warn('⚠️ GOOGLE_CLIENT_ID is missing in .env')
}

export const ENV = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  SESSION_SECRET: process.env.SESSION_SECRET || 'super-secret',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!
}
