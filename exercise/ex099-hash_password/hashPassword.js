import bcrypt from "bcrypt";
/* TO INSTALL:
    NPM INSTALL BCRYPT
*/

const saltRounds = 10;

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export const comparePassword = (normalPassword, hashedPassword) => {
    return bcrypt.compareSync(normalPassword, hashedPassword);
}