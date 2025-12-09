import express from 'express'
import passport from 'passport'
const router = express.Router()

// Google OAuth routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to your frontend
    res.redirect(process.env.CLIENT_URL || 'http://localhost:3000/dashboard')
  }
)

// Logout route
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' })
    }
    res.json({ message: 'Logged out successfully' })
  })
})

// Get current user
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else {
    res.status(401).json({ error: 'Not authenticated' })
  }
})

export default router
