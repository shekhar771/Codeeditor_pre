import pool from '../db'

class User {
  static async findByGoogleId (googleId) {
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE google_id = $1',
        [googleId]
      )
      return result.rows[0] || null
    } catch (error) {
      throw error
    }
  }

  static async findById (id) {
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
      return result.rows[0] || null
    } catch (error) {
      throw error
    }
  }

  static async create (userData) {
    try {
      const { googleId, name, email, avatar } = userData
      const result = await pool.query(
        `INSERT INTO users (google_id, name, email, avatar_url, created_at, updated_at) 
                 VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
                 RETURNING *`,
        [googleId, name, email, avatar]
      )
      return result.rows[0]
    } catch (error) {
      throw error
    }
  }

  static async update (id, userData) {
    try {
      const { name, email, avatar } = userData
      const result = await pool.query(
        `UPDATE users 
                 SET name = $2, email = $3, avatar_url = $4, updated_at = CURRENT_TIMESTAMP 
                 WHERE id = $1 
                 RETURNING *`,
        [id, name, email, avatar]
      )
      return result.rows[0]
    } catch (error) {
      throw error
    }
  }

  static async delete (id) {
    try {
      const result = await pool.query(
        'DELETE FROM users WHERE id = $1 RETURNING *',
        [id]
      )
      return result.rows[0]
    } catch (error) {
      throw error
    }
  }
}

export default User
