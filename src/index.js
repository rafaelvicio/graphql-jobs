const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const Company = require("./models/company");

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
  Query: {
    company: async id => {
      const company = await Company.findById(id);
      return company;
    },
    companys: async () => {
      const companys = await Company.find();
      return companys;
    }
  },
  Mutation: {
    createCompany: async (_, data) => {
      const company = await Company.create(data);
      return company;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
