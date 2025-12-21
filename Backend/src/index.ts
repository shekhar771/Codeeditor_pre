import { ENV } from './env' // <- FIRST import
import WorkerRouter from './routes/workerrouter'
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID)
console.log(
  'GOOGLE_CLIENT_SECRET:',
  process.env.GOOGLE_CLIENT_SECRET ? ' Loaded' : 'Missing'
)
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import AuthRouter from './routes/auth'
const app = express()

import './config/passport.ts'

// Middleware to parse JSON
app.use(express.json())

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
)

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session()) // <- important if using sessions

// CORS for Next.js frontend
app.use((_, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    process.env.CLIENT_URL || 'http://localhost:3000'
  )
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

// Routes
app.use('/execute', WorkerRouter)
// app.get('/', WorkerRouter)

app.use('/auth', AuthRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID)
  console.log('yooo')
  console.log(
    'GOOGLE_CLIENT_SECRET:',
    process.env.GOOGLE_CLIENT_SECRET ? ' Loaded' : ' Missing'
  )  
  console.log('yooo')

})
app.listen(3022, () => {
  console.log('🚀 Server running on http://localhost:3022')
})
