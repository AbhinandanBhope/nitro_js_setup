import routes from '~/routes'
import { verifyToken } from '../utils/jwt'

export default defineEventHandler(async (event) => {
  // Skip auth for public routes
  const publicRoutes = [
   
  ]
  
  if (!publicRoutes.some(route => event.path.startsWith(route))) {
   console.log("eventPath",event.path)
    return
  }

  const authHeader = getHeader(event, 'authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const token = authHeader.split(' ')[1]
  const payload = verifyToken(token)

  if (!payload) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }

  // Add user to event context
  event.context.auth = payload
})