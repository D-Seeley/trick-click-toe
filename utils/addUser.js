const addUser = (id) => {
    let users = [];
    
    let user = {
      id,
      playerOne: false,
      playerTwo: false,
    }
  
    if (!users.find(_user => _user.playerOne == true)) {
      console.log('there is no playerOne')
      user.playerOne = true;
      playerOne = user;
    } else if (!playerTwo) {
      user.playerTwo = true;
      playerTwo = user;
    } else {
      user.playerOne = false;
      user.playerTwo = false;
    }
  
    users.push(user);
  
    console.log(`
      Player One is: ${playerOne}
      Player Two is: ${playerTwo}
    `)
  }

  module.exports = { addUser };