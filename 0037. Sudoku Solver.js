function solveSudoku (board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] !== '.') continue;
      for (var k = 1; k <= 9; k++) {
        if (isValid(board, i, j, '' + k)) {
            board[i][j] = '' + k;
          if (solveSudoku(board)) { return true;} 
          else { board[i][j] = '.'; }
        }
      }
      return false;
    }
  }
  return true;
}

function isValid (board, i, j, num) {
  for (var k = 0; k < 9; k++) {
    if (board[i][k] === num) return false;
    if (board[k][j] === num) return false;
    if (board[Math.floor(i/3)*3 + Math.floor(k/3)]
         [Math.floor(j/3)*3 + (k%3)] 
         === num) return false;
  }
  return true;
}
