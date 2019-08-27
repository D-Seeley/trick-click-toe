const { User } = require('./User');
console.log(User)
//Create User
//Connect to Room
//

// let 
//   playerOne, 
//   playerTwo, 
//   game = true,
//   initialBoard = [0,0,0,0,0,0,0,0,0],
//   serverBoard = [...initialBoard];

// let users = [];

const addUser = (id) => {
    const user = new User(id);
    // console.log('User Created');
    // console.log('id is: ', id);
    // console.log('user.id is: ', user.id)

    return user;

    //   let user = {
//     id,
//     playerOne: false,
//     playerTwo: false
//   }

//   if (!users.find(_user => _user.playerOne == true)) {
//     console.log('there is no playerOne')
//     user.playerOne = true;
//     playerOne = user;
//   } else if (!playerTwo) {
//     user.playerTwo = true;
//     playerTwo = user;
//   } else {
//     user.playerOne = false;
//     user.playerTwo = false;
//   }

  users.push(user);

  console.log(`
    Player One is: ${playerOne}
    Player Two is: ${playerTwo}
  `)
}

const reset = () => {
  game = true;
  serverBoard = initialBoard;
}

module.exports = {
    addUser,
    reset
}