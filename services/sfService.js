const sfAuth = require("../auth/salesforceAuth");
let token;
module.exports.token = async () => {
    const t = sfAuth.main().then(function(r){
        return r;
    })
    return await t;
};




