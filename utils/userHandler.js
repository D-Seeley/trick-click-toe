const { User } = require('./User');
//Create User
//Connect to Room
//


const createUser = (id) => {
    const user = new User(id);
    // console.log('User Created');
    // console.log('id is: ', id);
    // console.log('user.id is: ', user.id)
    return user;
}

module.exports = {
    createUser
};