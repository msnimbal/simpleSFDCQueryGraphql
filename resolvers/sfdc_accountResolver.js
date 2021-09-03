const AccountAPI = require("../services/AccountAPI");
const resolvers = {
    Query: {
      getAccount: async (_, { Id }, {dataSources}) =>
        dataSources.AccountAPI.getAccount(Id),
      getAccounts: async (_, { qry }, { dataSources }) =>
          dataSources.AccountAPI.getAllAccounts(qry)
      
    }
  };

  module.exports = resolvers;