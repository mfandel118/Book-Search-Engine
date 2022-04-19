// import graphQL schema
const { gql } = require("apollo-server-express");

// define schemas
const typeDefs = gql`
    type User {}`;

// export typeDefs
module.exports = typeDefs;
