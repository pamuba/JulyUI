const bcrypt = require("bcrypt");
//IIFE
(
    async function main(){
        const saltRounds = 10;
        const originalPassword = "Complex@123";
        const password = "Complex@123";

        const salt = await bcrypt.genSalt(saltRounds);
        const hasedPass = await bcrypt.hash(originalPassword, salt);//save in db

        console.log(hasedPass);

        const isMatch = await bcrypt.compare(password, hasedPass);
        console.log(isMatch)

    }
)();