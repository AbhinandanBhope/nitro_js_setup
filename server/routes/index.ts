import { defineEventHandler } from 'h3'
import swaggerUi from 'swagger-ui-express'
import { getSwaggerHTML, getSwaggerSetup } from '../utils/swagger'

export default defineEventHandler(async (event) => {
  const url = event.path || ''
  
  console.log("HI")
  // Serve Swagger UI static files

    const docs = await $fetch('/api/docs')
    console.log("docs",docs)
    
   
      return getSwaggerHTML()
    
    
    return getSwaggerSetup(docs)
  
})