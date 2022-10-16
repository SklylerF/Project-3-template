/* This is a common pattern for setting a port for an express server. */
const PORT = process.env.PORT || 3001;

/**
 * It creates a new ApolloServer instance, configures it with our type definitions and resolvers, and
 * then starts it
 */
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

/* It creates a new ApolloServer instance, configures it with our type definitions and resolvers, and
then starts it. */
startServer();

/* Parsing the body of the request. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
