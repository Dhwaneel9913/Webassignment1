const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
  }

  type Employee {
    id:String!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    salary: Float!
  }

  type Query {
    getAllEmployees: [Employee]
    searchEmployeeById(eid: ID!): Employee
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    login(usernameOrEmail: String!, password: String!): User
    addNewEmployee(
      first_name: String!
      last_name: String!
      email: String!
      gender: String
      salary: Float!
    ): Employee
    updateEmployeeById(
      eid: ID!
      first_name: String
      last_name: String
      email: String
      gender: String
      salary: Float
    ): Employee
    deleteEmployeeById(eid: ID!): Employee
  }
`;

module.exports = typeDefs;
