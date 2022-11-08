const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
   
  }

  type Product {
    _id: ID
    name: String
    image: String
    description: String
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  
  }
`;

module.exports = typeDefs;