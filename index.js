var fs = require('fs');
const bcrypt = require('bcrypt-nodejs');
const yourPassword = 'P@ssw0rd!';

const salt = bcrypt.genSaltSync(8)
const saltHashedPassword = {
    salt: salt,
    password: bcrypt.hashSync(yourPassword, salt, null)
};


const json = JSON.stringify(saltHashedPassword);
fs.writeFile('myjsonfile.json', json, 'utf8', ()=>{
    console.log('You can find result on myjsonfile.json');
});