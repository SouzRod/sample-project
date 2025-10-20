export default {
  method: 'GET',
  url: '/v1/hello',
  handler: async (request, reply) => {
    return { message: 'Hello, World!' };
  },
  schema: {
    description: 'Rota para obter uma saudação simples',
    tags: ['HelloWorld'],
  },
}