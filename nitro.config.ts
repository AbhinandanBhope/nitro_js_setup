export default defineNitroConfig({
  srcDir: 'server',

  routeRules: {
    '/api/**': {
      cors: true,

      headers: {
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    },
    
  },
  experimental: {
    openAPI: true,
  },

  compatibilityDate: '2024-11-04'
})