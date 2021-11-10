const validator = require("validator");

console.log(process.argv)

const mails = process.argv[2].split(",")
 
// const mails = [
//   "jordy@hff.fr",
//   "nicola@fgkg.ch",
//   "hfnaki@heool",
//   "jerome.jeux@french",
//   "jehrjhpof@orjf.ch"
// ]

mails.forEach((mail) => {
console.log(
  "%s : %s",
  mail,
  validator.isEmail(mail) ? "OK" : "KO"
)
})

// const isEmail =  validator.isEmail('foo@bar.com');

// console.log(isEmail)