const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');
const connectDB = require('./src/utils/db');
const path = require('path');
const employeeRoutes = require('./src/routes/employeeRoutes');

connectDB();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  app.use('/api', employeeRoutes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startServer();
