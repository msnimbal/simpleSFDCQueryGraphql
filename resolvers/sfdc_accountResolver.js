const AccountAPI = require("../services/AccountAPI");
const resolvers = {
    Query: {
      getAccount: async (_, { Id }, {dataSources}) =>
        dataSources.AccountAPI.getAccount(Id),
      getAccounts: async (_, { qry }, { dataSources }) =>
          dataSources.AccountAPI.getAllAccounts(qry)
      
    },
    Account : {
      __resolveReference(reference){
        console.log('Account Resolver is called');
        return AccountAPI.getAccount(reference.CustomField[0].StringValue);
      }
    }
  };

  module.exports = resolvers;