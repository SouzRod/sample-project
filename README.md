# API Project

Este é um projeto de API REST construído com Fastify, documentação Swagger e suporte a CORS.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [@fastify/swagger](https://github.com/fastify/fastify-swagger)
- [@fastify/swagger-ui](https://github.com/fastify/fastify-swagger-ui)
- [@fastify/cors](https://github.com/fastify/fastify-cors)

## 📋 Pré-requisitos

- Node.js (versão 18+)
- npm ou yarn
- MongoDB (se estiver usando banco de dados)

## 🔧 Configuração do Ambiente

1. Clone o repositório
```bash
git clone [url-do-seu-repositorio]
cd sample-project
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
SERVICE_NAME=sample-project
PORT=3001
ENV=development
USE_PREFIX=true

# Database
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=sample-project
MONGO_COLLECTION_PRODUCT=products
```

## 🚀 Executando o Projeto

Desenvolvimento:
```bash
npm run dev
```

Produção:
```bash
npm start
```

## 📚 Documentação da API

A documentação Swagger está disponível em:
```
http://localhost:3000/api/docs
```

## 🛣️ Rotas da API

A API usa o prefixo `/api` para todas as rotas.

### Endpoints disponíveis:

> Note: Complete esta seção com as rotas específicas do seu projeto

Exemplo:
- `GET /api/health` - Verificação de saúde da API
- `GET /api/[recurso]` - Lista recursos
- `POST /api/[recurso]` - Cria novo recurso
- `PUT /api/[recurso]/:id` - Atualiza recurso
- `DELETE /api/[recurso]/:id` - Remove recurso

## 🔍 Linting e Formatação

O projeto usa ESLint para garantir a qualidade do código. Configurações principais:
- Máximo de 140 caracteres por linha
- Aspas simples
- Ponto e vírgula obrigatório
- Indentação de 2 espaços

Para verificar o código:
```bash
npm run lint
```

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

---

⌨️ com ❤️ por [seu-nome-aqui]