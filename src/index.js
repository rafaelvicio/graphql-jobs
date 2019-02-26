const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const Company = require("./models/company");

const companyResolver = require('./graphql/resolvers/company');
const jobResolver = require('./graphql/resolvers/job');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Company {
    _id: ID
    name: String
    address: String
    url: String
    description: String
    active: Boolean
    createdAt: String
  }
  type Query {
    company(id: ID!): Company
    companys: [Company]
  }
  type Mutation {
    createCompany(name: String!, address: String!, url: String!, description: String!): Company
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: Object.assign({}, companyResolver.Query, jobResolver.Query),
  Mutation: Object.assign({}, companyResolver.Mutation, jobResolver.Mutation)
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
