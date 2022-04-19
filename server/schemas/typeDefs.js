// import graphQL schema
const { gql } = require("apollo-server-express");

// define schemas
const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		bookCount: Int
		savedBooks: [Book]
	}
	type Book {
		bookId: ID!
		authors: [String]
		description: String!
		title: String!
		image: String
		link: String
	}
	type Auth {
		token: ID!
		user: User
	}
    type Query {

    }
    type Mutation {
        
    }
`;

// export typeDefs
module.exports = typeDefs;
