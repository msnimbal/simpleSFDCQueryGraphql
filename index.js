const express = require("express");
const { ApolloServer,gql,graphqlPath } = require('apollo-server-express');
const { buildSubgraphSchema } = require('@apollo/federation');
const app = express();
const AccountAPI = require("./services/AccountAPI");
const sf = require("./services/sfService.js");
const port = process.env.PORT || 3001;
const typeDefs = require("./typedefs/sfdc_account");
const resolvers = require("./resolvers/sfdc_accountResolver");

sf.token().then(function(f){
    startApolloServer(typeDefs, resolvers,f);
});

 async function startApolloServer(typeDefs, resolvers,f) {

    
  const server = new ApolloServer({
    dataSources : () => {
      return {
        AccountAPI : new AccountAPI.AccountAPI(f)
      }
    },
    schema: buildSubgraphSchema([
      {
        resolvers,
        typeDefs,
      },
    ]),
  })
    
    
   
    await server.start();
    
    server.applyMiddleware({
       app,path: '/gql'
    });
  
    // Modified server startup
    await new Promise(resolve => app.listen({ port: port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  }




/*
const resolvers = {
    Query: {
      getAccount: async (_, { id }, {dataSources}) =>
        dataSources.AccountAPI.getAccount(id),
      getAccounts: async (_, { qry }, { dataSources }) =>
          dataSources.AccountAPI.getAllAccounts(qry)
      
    }
  };
*/