

import crypto = require('crypto');
import  util  = require('util');


export const randomBytes = util.promisify(crypto.randomBytes);

// crypto.randomBytes(32, (err,num) => {
//   console.log(num)
// });

// randomBytes(32)
//   .then(num => console.log(num))
//   .catch(err => {

//   })
