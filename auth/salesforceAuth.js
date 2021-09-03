const util = require('util')
require('dotenv').config()
let getToken = require('salesforce-jwt-bearer-token-flow').getToken
getToken = util.promisify(getToken)
const   fs = require('fs')
    ,   privateKey = fs.readFileSync('server.key').toString('utf8');
module.exports.main = async () => {

    const token = getToken({
        iss: process.env.CLIENT_ID,
        sub: "manju@lwr.com",
        aud: "https://login.salesforce.com",
        privateKey: privateKey
    });
   // console.log(token);
    return token;

}







