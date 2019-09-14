module.exports = (board) => {
    const rowCount = Math.sqrt(board.length)
    const columnCount = rowCount;
    console.log(columnCount);
    console.log(rowCount);
  
    //check columns for winners
    for (let i = 0; i < columnCount; i++) {
      let column = [board[i]];
      
      while (column.length < columnCount) {
        column.push(board[i + (column.length * rowCount)])
      }
  
      if ((column.every(tile => tile === column[0])) && column[0] !== 0) {
        console.log(`column ${i} is a winner`);
        return true;
      }
    }
  
    //check rows for winners
    for (let i = 0; i < rowCount; i++) {
      const start = i * rowCount;
        const row = board.slice(start, (start + rowCount));
      
      if ((row.every(tile => tile === board[i * rowCount])) && board[i * rowCount] !== 0) {
        console.log(`row ${i} is a winner`);
        return true;
      }
    }
    
    //check diaganols for winners
    ////left to right
    //Using row count arbitraliy
    let diaganolLtoR = [board[0]];
    let diaganolRtoL = [board[columnCount - 1]];
    
    for (let i = 1; i < rowCount; i++) {
        diaganolLtoR.push(board[(i * columnCount) + i]);
        diaganolRtoL.push(board[((i + 1) * columnCount) - i])
    }
    
    if ((diaganolLtoR.every(tile => tile === diaganolLtoR[0])) && diaganolLtoR[0] !== 0) {
        console.log(`diaganolLtoR is a winner`);
        return true;
      }

    if ((diaganolRtoL.every(tile => tile === diaganolRtoL[0])) && diaganolRtoL[0] !== 0) {
        console.log(`diaganolRtoL is a winner`);
        return true;
    } 

    return false;
  }
