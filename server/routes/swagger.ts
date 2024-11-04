import { defineEventHandler } from 'h3'
import swaggerUi from 'swagger-ui-express'
import { getSwaggerHTML, getSwaggerSetup } from '../utils/swagger'

export default defineEventHandler(async (event) => {
  const url = event.path || ''
  
  // Serve Swagger UI static files
  if (url.includes('/api-docs')) {
    const docs = await $fetch('/api/docs')
    
    if (url.endsWith('/api-docs')) {
      return getSwaggerHTML()
    }
    
    return getSwaggerSetup(docs)
  }
})