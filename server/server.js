if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const connectDB = require("./config/connection");
const therapistsRoutes = require("./routes/therapistsRoutes");

const PORT = process.env.PORT || 3001;
const app = express();


const startApolloServer = async () => {
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

await server.start();
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.use("/api", therapistsRoutes);

connectDB();
/*.then(() => {
  server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
});*/


/*const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });*/

  //db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    };



// Call the async function to start the server
startApolloServer();