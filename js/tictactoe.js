//////////////////////
// Global Variables //
//////////////////////

var alertBox = $(".alert"); // Quick alert section grab

////////////////
// The Object //
////////////////

/*
Starts the TicTacToe object.
"player" sets the player value to 1 so
that we can differentiate it from the computer's value.
"board" sets up an empty board.
"wins" shows the possible wins using the array index,
starting with rows, then columns, then diagonals.
"playerIs" and "computerIs" will hold the text for who
is O and who is X while using the FontAwesome Icons.
*/

var TicTacToe = {
  player: 1,
  computer: 2,
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  wins: [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]],
  idNames: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
  playerIs: "",
  computerIs: "",
};

// Sets who is X and who is O

TicTacToe.setPlayer = function(player, computer) {
  TicTacToe.playerIs = player;
  TicTacToe.computerIs = computer;
};

// Checks for a win

TicTacToe.checkForWin = function(game, player) {

  var wins = TicTacToe.wins;

  for (var i = 0; i < wins.length; i++) {

    // checks to see if all three cells for the win match
    if (game[wins[i][0]] === player &&
        game[wins[i][1]] === player &&
        game[wins[i][2]] === player) {

      return true;

    }

  }

  return false;

};

// Checks for a draw

TicTacToe.checkForDraw = function(game) {
  return TicTacToe.board.indexOf(0) === -1 ? true : false ;
};

// Changes the array for the board based off what cell the player clicks

TicTacToe.changeBoard = function(name, player) {
  switch (name) {
    case "one":
      TicTacToe.board[0] = player;
      break;
    case "two":
      TicTacToe.board[1] = player;
      break;
    case "three":
      TicTacToe.board[2] = player;
      break;
    case "four":
      TicTacToe.board[3] = player;
      break;
    case "five":
      TicTacToe.board[4] = player;
      break;
    case "six":
      TicTacToe.board[5] = player;
      break;
    case "seven":
      TicTacToe.board[6] = player;
      break;
    case "eight":
      TicTacToe.board[7] = player;
      break;
    case "nine":
      TicTacToe.board[8] = player;
      break;
    default:
      break;
  }
};

// Converts the where the computer wants to go to an ID name for the table

TicTacToe.convertToID = function(num) {

  return TicTacToe.idNames[num];
};

// Returns max value from array

TicTacToe.max = function(arr) {
  var max = -99999;

  arr.forEach(function(num) {
    if (num > max) {
      max = num;
    } else {
      max = max;
    }
  });

  return max;
};

// Returns min value from array

TicTacToe.min = function(arr) {
  var min = 99999;

  arr.forEach(function(num) {
    if (num < min) {
      min = num;
    } else {
      min = min;
    }
  });

  return min;
};

// Gets the 'score' of the board for minimax

TicTacToe.score = function(game, depth) {
  if( TicTacToe.checkForWin(game, TicTacToe.computer)) {
    return 10 - depth;
  } else if (TicTacToe.checkForWin(game, TicTacToe.player)) {
    return depth - 10;
  } else {
    return 0;
  }
};

TicTacToe.computerTurn = function() {
  // grab move from minimax
  // get id to match move from minimax
  // check to see if the computer won
};

TicTacToe.miniMax = function(game, player, depth) {

  if (TicTacToe.checkForDraw(game) || TicTacToe.checkForWin(game, player) || depth === 5) {
      return TicTacToe.score(game, depth);
  }
  var scores = [];
  var moves = [];
  depth++;

  for (var i = 0; i < game.length; i++) {

    if (game[i] === 0) {
      var tempGame = game;
      tempGame[i] = player;
      if (player === TicTacToe.computer) {
        scores.push(TicTacToe.miniMax(tempGame, TicTacToe.player, depth));
        moves.push(i);
      } else {
        scores.push(TicTacToe.miniMax(tempGame, TicTacToe.computer, depth));
        moves.push(i);
      }
    }

  }

  console.log("Moves:", moves);
  console.log("Scores:", scores);

  if (player === TicTacToe.computer) {
    maxScore = TicTacToe.max(scores);
    scoreIndex = scores.indexOf(maxScore);
    return scores[scoreIndex];
  } else {
    minScore = TicTacToe.min(scores);
    scoreIndex = scores.indexOf(minScore);
    return scores[scoreIndex];
  }

};

//////////////////////
// The click events //
//////////////////////

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

/*

TicTacToe.computerTurn
TicTacToe.minMax
TicTacToe.reset

*/
