import { signToken } from '../../utils/jwt'
import { verifyPassword } from '../../utils/password'

export default defineEventHandler(async (event) => {
  // Get request body
  const body = await readBody(event)
  
  // Validate request body
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      message: 'Email and password are required'
    })
  }

  // In a real app, you would fetch the user from your database
  const user = await body.email
  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials'
    })
  }

  // Verify password
  const isValidPassword = await verifyPassword(body.password, user.password)
  if (!isValidPassword) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials'
    })
  }

  // Generate JWT token
  const token = signToken({
    sub: user.id,
    email: user.email
  })

  // Return response
  return {
    accessToken: token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
  }
})