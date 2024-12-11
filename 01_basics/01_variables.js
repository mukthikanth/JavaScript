const accountId = 12345
let accountEmail = "abagoogle.com"
var accountCity = "Bengaluru"
accountPassword = "adfjls"
let accountState

/*
 Prefer not to use var because of issue in block scope and functional scope 
*/

accountEmail = 23
accountCity = "Mumbai"
accountPassword = "12434"
console.log(accountEmail);
console.table([accountCity, accountEmail, accountPassword, accountState])