const accountId = 12345
let accountEmail = "parmarharsh213@gmail.com"
var accountPassword = "123098"
accountCity = "junagadh"


// accountId = 2 // not allowed 


accountEmail = "hello@hey.com"
accountPassword = "098764"
accountCity = "amdvd"

let accountState;

console.log(accountId);

/* Prefer not to use 'var' 
   Because of issue in block scope and functional scope  
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])