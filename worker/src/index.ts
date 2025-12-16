console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID)
console.log(
  'GOOGLE_CLIENT_SECRET:',
  process.env.GOOGLE_CLIENT_SECRET ? ' Loaded' : 'Missing'
)
import express from 'express'

const app = express()



// Middleware to parse JSON
app.use(express.json())


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

app.get('/', (req, res) => {
  res.send('Hello World!')

})
app.listen(3023, () => {
  console.log('🚀 Server running on http://localhost:3023')
})
