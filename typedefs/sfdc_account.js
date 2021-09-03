const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Account @key(fields: "Id") @key(fields: "Intuit_Id__c") {
    Id: ID!,
    Name: String!,
    BillingPostalCode : String
    Intuit_Id__c : ID 
   
  }
  
  type Query {
    getAccount(Id: String): Account
    getAccounts(qry: String):[Account]
   } 
`;
  module.exports = typeDefs;
  
  