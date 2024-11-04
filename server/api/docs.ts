export default defineEventHandler(() => {
    return {
      openapi: '3.0.0',
      info: {
        title: 'Authentication API',
        version: '1.0.0',
        description: 'API documentation for authentication service'
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local development server'
        }
      ],
      paths: {
        '/api/auth/login': {
          post: {
            tags: ['Authentication'],
            summary: 'User login',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                      email: {
                        type: 'string',
                        format: 'email',
                        example: 'user@example.com'
                      },
                      password: {
                        type: 'string',
                        format: 'password',
                        example: 'Password123!'
                      }
                    }
                  }
                }
              }
            },
            responses: {
              '200': {
                description: 'Successful login',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        accessToken: {
                          type: 'string',
                          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                        },
                        user: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                              example: '123e4567-e89b-12d3-a456-426614174000'
                            },
                            email: {
                              type: 'string',
                              example: 'user@example.com'
                            },
                            firstName: {
                              type: 'string',
                              example: 'John'
                            },
                            lastName: {
                              type: 'string',
                              example: 'Doe'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              '401': {
                description: 'Invalid credentials'
              }
            }
          }
        }
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      security: [
        {
          bearerAuth: []
        }
      ]
    }
  })