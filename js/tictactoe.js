var msg = function(text) {
  console.log(text);
};

var alertBox = $(".alert"); // Quick alert section grab

// Starts the object 

var TicTacToe = {
  player: 1,
  computer: 2,
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  playerIs: "",
  computerIs: ""
};

// Checks for a win

TicTacToe.checkForWin = function(playerNum, game) {

  if ((game[0][0] === playerNum && game[0][1] === playerNum && game[0][2] === playerNum) ||
    (game[1][0] === playerNum && game[1][1] === playerNum && game[1][2] === playerNum) ||
    (game[2][0] === playerNum && game[2][1] === playerNum && game[2][2] === playerNum) ||
    (game[0][0] === playerNum && game[1][0] === playerNum && game[2][0] === playerNum) ||
    (game[0][1] === playerNum && game[1][1] === playerNum && game[2][1] === playerNum) ||
    (game[0][2] === playerNum && game[1][2] === playerNum && game[2][2] === playerNum) ||
    (game[0][0] === playerNum && game[1][1] === playerNum && game[2][2] === playerNum) ||
    (game[0][2] === playerNum && game[1][1] === playerNum && game[2][0] === playerNum)) {
    return true;
  } else {
    return false;
  }
};

TicTacToe.checkForEnd = function() {

  if (TicTacToe.board[0].indexOf(0) === -1 &&
    TicTacToe.board[1].indexOf(0) === -1 &&
    TicTacToe.board[2].indexOf(0) === -1) {

    return true;

  } else {

    return false;

  }
};

// Sets who is X and who is O

TicTacToe.setPlayer = function(player, computer) {
  TicTacToe.playerIs = player;
  TicTacToe.computerIs = computer;
};

// Changes the array for the board based off what cell the player clicks

TicTacToe.changeBoard = function(name, player) {
  switch (name) {
    case "one":
      TicTacToe.board[0][0] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "two":
      TicTacToe.board[0][1] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "three":
      TicTacToe.board[0][2] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "four":
      TicTacToe.board[1][0] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "five":
      TicTacToe.board[1][1] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "six":
      TicTacToe.board[1][2] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "seven":
      TicTacToe.board[2][0] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "eight":
      TicTacToe.board[2][1] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    case "nine":
      TicTacToe.board[2][2] = player;
      TicTacToe.checkForWin(player, TicTacToe.board);
      TicTacToe.checkForEnd();
      break;
    default:
      break;
  }
};

// The computer turn
// TODO:
//     1. Have computer calculate best path towards its victory using minimax (!!!Last)
//     3. Have "O" always start no matter who is playing.

TicTacToe.convertToID = function(row, col) {
  var idNames = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"]
  ];

  return idNames[row][col];
};

TicTacToe.computerTurn = function() {
  var row = Math.floor(Math.random() * 3);
  var col = Math.floor(Math.random() * 3);
  var counter = 0;

  test = TicTacToe.minMax(TicTacToe.board, TicTacToe.computer, 1);

  // msg(test);

  if (TicTacToe.board[row][col] !== 0) {
    counter++;

    if (counter < 100) {
      TicTacToe.computerTurn();
    } else {
      //msg("Computer can't go anymore"); // to stop recursion during testing
    }
  } else {
    var placement = TicTacToe.convertToID(row, col);
    $("#" + placement).html("<i class='" + TicTacToe.computerIs + "'></i>");
    TicTacToe.changeBoard(placement, TicTacToe.computer);

  }
};

// Returns max value

TicTacToe.max = function(arr) {
  var max = [];

  arr.forEach(function(num) {
    if (num[0] > max) {
      max = num;
    } else {
      max = max;
    }
  });

  return max;
};

// Returns min value

TicTacToe.min = function(arr) {
  var min = [];

  arr.forEach(function(num) {
    if (num[0] < min) {
      min = num;
    } else {
      min = min;
    }
  });

  return min;
};

// Score Test for console use

TicTacToe.scoreTest = function(board) {
  if (TicTacToe.checkForWin(2, board) || (board[0].indexOf(0) === -1 && board[1].indexOf(0) === -1 && board[2].indexOf(0) === -1)) { // maximize for computer win
    return 10;
  }
  if (TicTacToe.checkForWin(1, board) || (board[0].indexOf(0) === -1 && board[1].indexOf(0) === -1 && board[2].indexOf(0) === -1)) { // minimize for player win
    return -10;
  } else { // For draw
    return 0;
  }
};

// Checks to see if there are no more spaces

TicTacToe.spacesLeft = function(board) {
    return (board[0].indexOf(0) === -1 && board[1].indexOf(0) === -1 && board[2].indexOf(0) === -1) ? true : false;
};

// Minimax Function

TicTacToe.minMax = function(board, player, depth) {

  ////////////////////////////
  // MINIMAX IMPLEMENTATION //
  ////////////////////////////

  if (TicTacToe.checkForWin(2, board) || TicTacToe.spacesLeft(board) || depth === 6) { // maximize for computer win
    return 10 - depth;
  } else if (TicTacToe.checkForWin(1, board) || TicTacToe.spacesLeft(board) || depth === 6) { // minimize for player win
    return depth - (-10);
  } else if (TicTacToe.spacesLeft(board) || depth === 6) { // For draw if ((board[0].indexOf(0) === -1 && board[1].indexOf(0) === -1 && board[2].indexOf(0) === -1) && depth <= 6)
    return 0;
  }

  var tempBoard = board;

  var scores = [];

  for (var i = 0; i < tempBoard.length; i++) {

    for (var j = 0; j < tempBoard[i].length; j++) {

      if (tempBoard[i][j] === 0) {

        tempBoard[i][j] = player;

        if (player === 2) {
          scores.push([TicTacToe.minMax(tempBoard, TicTacToe.player, depth + 1), i, j]);

        } else {
          scores.push([TicTacToe.minMax(tempBoard, TicTacToe.computer, depth +1), i, j]);

        }

      }

    }

  }
  var bestScore;

  console.log(scores, "after bestScore var");

  if (player === 1) {
    bestScore = TicTacToe.min(scores);
  } else {
    bestScore = TicTacToe.max(scores);
  }

  var x = bestScore[1]; // grabs X position from best score array
  var y = bestScore[2]; // grabs Y position from best score array

  return [x, y];

};

///////////////////////////////////
// END OF MINIMAX IMPLEMENTATION //
///////////////////////////////////

// Click event to play the game

$("td").click(function(event) {
  var tdName = event.currentTarget.id;

  // Disallows a player to play on a space that is already taken
  if (event.currentTarget.firstChild !== null) {
    alertBox.html("You can't go there!");

  } else if (TicTacToe.playerIs !== "") {

    //Plays the game
    alertBox.html("");

    TicTacToe.changeBoard(tdName, TicTacToe.player);

    $("#" + tdName).html("<i class='" + TicTacToe.playerIs + "'></i>");

    TicTacToe.computerTurn();

  } else {
    // Makes the player pick a side first
    alertBox.html("Pick a side, please.");
  }
});

// Click events to set the players.

$("#o").click(function() {

  if (TicTacToe.playerIs === "") {

    alertBox.html("");

    TicTacToe.setPlayer("fa fa-circle-o", "fa fa-times");
    $("#o").addClass("picked").removeClass("choices");

  } else {
    alertBox.html("You already picked a side!");
  }

});

$("#x").click(function() {

  if (TicTacToe.playerIs === "") {

    alertBox.html("");

    TicTacToe.setPlayer("fa fa-times", "fa fa-circle-o");
    $("#x").addClass("picked").removeClass("choices");
    TicTacToe.computerTurn();

  } else {
    alertBox.html("You already picked a side!");
  }

});