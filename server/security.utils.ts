

import crypto = require('crypto');
import  util  = require('util');


util.promisify(crypto.randomBytes);
