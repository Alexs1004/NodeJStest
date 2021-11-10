const validator = require("validator");

const isEmail =  validator.isEmail('foo@bar.com');

console.log(isEmail)