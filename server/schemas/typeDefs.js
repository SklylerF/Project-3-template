/* Importing the GraphQL schema language. */
const { gql } = require('apollo-server-express');


/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Appointment {
    _id: ID!
    appointmentTimeDate: String!
    approved: Boolean
    user: User!
  }

type Day {
  # The Day ID could be the actual day itself, i.e. 2020-12-29
  _id: ID!
  open: Boolean!
  hours: Int!
  appointments: [Appointment!]!
}

type Auth {
    token: ID!
    User: User
  }

  type Category {
    _id: ID
    name: String
  }


  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category

  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  input UserInput {
    username: String
    name: String
    email: String
  }


  type Query {
    getUsers: [User!]!
    singleUser(UserId: ID!): User
    getDaySchedule(Date: ID!): Day
    categories: [Category]
    product(_id: ID!): Product
    products(category: ID, name: String): [Product]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout

    }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, name: String!,  email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    requestAppointment(appointmentTimeDate: String!, input: UserInput!): Appointment
    approveAppointment(id: ID!): Appointment
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product

    
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
