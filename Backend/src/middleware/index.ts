// const requireAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next()
//   }
//   res.status(401).json({ error: 'Authentication required' })
// }

// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({ error: 'Authentication required' })
}
