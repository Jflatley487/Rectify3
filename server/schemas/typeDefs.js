const { gql } = require('apollo-server-express'); // Import the gql function for the apollo server

// Define the GraphQL type defs using the template literal tag
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Comment {
    commentTitle: String
    commentBody: String
    commenter: String
  }

  type Therapist {
    _id: ID
    name: String
    specialty: String
    location: String
    bio: String
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    therapists: [Therapist!]!
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(therapistId: ID!, commentTitle: String!, commentBody: String!): Therapist
  }
`;

// Export the typeDefs object
module.exports = typeDefs;
