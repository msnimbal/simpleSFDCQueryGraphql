const { RESTDataSource, RequestOptions } = require('apollo-datasource-rest');
const fetch = require('node-fetch');

let tkn;
class AccountAPI extends RESTDataSource {
    constructor(token) {
        
        super();
        this.baseURL = `${token.instance_url}/services/data/v52.0/`;
        tkn = token;
        
        
    }
    willSendRequest(request) {
        request.headers.set("Authorization" , `Bearer ${tkn.access_token}`);
    }
    
    async getAccount(id) {
        
        let data =  await this.get(`sobjects/Account/${id}`,undefined,{});
         return await data;
     }
  
    async getAllAccounts(qry) {
      
      let data = await this.get(`queryAll/?q=${qry}`, undefined,{});
      
      return await data.records;
    }
}
module.exports.AccountAPI = AccountAPI;