const express = require("express");
// import apollo server class
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
// import graphQL schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.use(routes);

// Create new apollo server with graphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });

	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`🌍 Now listening on localhost:${PORT}`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
			);
		});
	});
};

// call function to start server
startApolloServer(typeDefs, resolvers);
