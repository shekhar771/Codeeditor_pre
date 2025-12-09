import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../model/user'
import { ENV } from '../env'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await User.findByGoogleId(profile.id)

        if (user) {
          // Update user info in case it changed
          const updatedUser = await User.update(user.id, {
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
          })
          return done(null, updatedUser)
        } else {
          // Create new user
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
          })
          return done(null, newUser)
        }
      } catch (error) {
        console.error('Passport Google Strategy error:', error)
        return done(error, null)
      }
    }
  )
)
console.log('GOOGLE_CLIENT_ID:', ENV.GOOGLE_CLIENT_ID)
console.log(
  'GOOGLE_CLIENT_SECRET:',
  process.env.GOOGLE_CLIENT_SECRET ? '✅ Loaded11' : '❌ Missingsss'
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (error) {
    done(error, null)
  }
})

export default passport
