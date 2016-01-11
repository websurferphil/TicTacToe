/////////////////////////////////
// Global Variables  and Start //
/////////////////////////////////

var alertBox = $(".alert"); // Quick alert section grab
$(".winner").hide();

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
  winner: false
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

TicTacToe.computerTurn = function() {
  //Looks at the board
  var rowTop = TicTacToe.look([TicTacToe.board[0], TicTacToe.board[1], TicTacToe.board[2]]);
  var rowMid = TicTacToe.look([TicTacToe.board[3], TicTacToe.board[4], TicTacToe.board[5]]);
  var rowBot = TicTacToe.look([TicTacToe.board[6], TicTacToe.board[7], TicTacToe.board[8]]);
  var colLeft = TicTacToe.look([TicTacToe.board[0], TicTacToe.board[3], TicTacToe.board[6]]);
  var colMid = TicTacToe.look([TicTacToe.board[1], TicTacToe.board[4], TicTacToe.board[7]]);
  var colRight = TicTacToe.look([TicTacToe.board[2], TicTacToe.board[5], TicTacToe.board[8]]);
  var diagLeft = TicTacToe.look([TicTacToe.board[0], TicTacToe.board[4], TicTacToe.board[8]]);
  var diagRight = TicTacToe.look([TicTacToe.board[2], TicTacToe.board[4], TicTacToe.board[6]]);
  // Finds a win for the computer

  if (rowTop[0] === 2 && rowTop[1] !== 1) {
    TicTacToe.move("rowTop");
    return;
  } else if(rowMid[0] === 2 && rowMid[1] !== 1) {
    TicTacToe.move("rowMid");
    return;
  } else if(rowBot[0] === 2 && rowBot[1] !== 1) {
    TicTacToe.move("rowBot");
    return;
  } else if(colLeft[0] === 2 && colLeft[1] !== 1) {
    TicTacToe.move("colLeft");
    return;
  } else if(colMid[0] === 2 && colMid[1] !== 1) {
    TicTacToe.move("colMid");
    return;
  } else if(colRight[0] === 2 && colRight[1] !== 1) {
    TicTacToe.move("colRight");
    return;
  } else if(diagLeft[0] === 2 && diagLeft[1] !== 1) {
    TicTacToe.move("diagLeft");
    return;
  } else if(diagRight[0] === 2 && diagRight[1] !== 1) {
    TicTacToe.move("diagRight");
    return;
  }

  // Finds a win for the player, computer will block

  if (rowTop[1] === 2 && rowTop[0] !== 1) {
    TicTacToe.move("rowTop");
    return;
  } else if(rowMid[1] === 2 && rowMid[0] !== 1) {
    TicTacToe.move("rowMid");
    return;
  } else if(rowBot[1] === 2 && rowBot[0] !== 1) {
    TicTacToe.move("rowBot");
    return;
  } else if(colLeft[1] === 2 && colLeft[0] !== 1) {
    TicTacToe.move("colLeft");
    return;
  } else if(colMid[1] === 2 && colMid[0] !== 1) {
    TicTacToe.move("colMid");
    return;
  } else if(colRight[1] === 2 && colRight[0] !== 1) {
    TicTacToe.move("colRight");
    return;
  } else if(diagLeft[1] === 2 && diagLeft[0] !== 1) {
    TicTacToe.move("diagLeft");
    return;
  } else if(diagRight[1] === 2 && diagRight[0] !== 1) {
    TicTacToe.move("diagRight");
    return;
  }

  // If all else fails, choose another space!
  var num = TicTacToe.altMove();
  var placement = TicTacToe.convertToID(num);
  TicTacToe.changeBoard(placement, TicTacToe.computer);
  $("#" +  placement).html("<i class='"+ TicTacToe.computerIs + "'></i>");

};



// Brute force methods. Inspiration from TheDukeOfAwesome
// Modified to fit the code

//Gets the first move for the computer

TicTacToe.firstMove = function() {
  var placement = Math.floor(Math.random()*5);

  switch (placement) {
    case 0:
      TicTacToe.changeBoard("one", TicTacToe.computer); // Top left corner
      $("#one").html("<i class='" + TicTacToe.computerIs + "'></i>");
      break;
    case 1:
      TicTacToe.changeBoard("three", TicTacToe.computer); // Top right corner
      $("#three").html("<i class='" + TicTacToe.computerIs + "'></i>");
      break;
    case 2:
      TicTacToe.changeBoard("five", TicTacToe.computer); // Center
      $("#five").html("<i class='" + TicTacToe.computerIs + "'></i>");
      break;
    case 3:
      TicTacToe.changeBoard("seven", TicTacToe.computer); // Bottom left corner
      $("#seven").html("<i class='" + TicTacToe.computerIs + "'></i>");
      break;
    case 4:
      TicTacToe.changeBoard("nine", TicTacToe.computer); // Bottom right corner.
      $("#nine").html("<i class='" + TicTacToe.computerIs + "'></i>");
      break;
    default:
      break;
  }

  return placement;
};

// Looks for the amount of cells that are taken up by the player or the computer

TicTacToe.look = function (whichCells) {

  var compAmount = 0;
  var playerAmount = 0;

  whichCells.forEach(function(num) {
    if (num === 1) {
      playerAmount++;
    } else if (num === 2) {
      compAmount++;
    }
  });

  // Returns the amount of cells taken up by the comptuer or the player
  return [compAmount, playerAmount];

};

// Finds the hole when there are two in the three cells

TicTacToe.findHole = function(cells) {

  switch (cells) {
    case "rowTop":
      if ( TicTacToe.board[0] === 0) {
        return 0;
      } else if ( TicTacToe.board[1] === 0) {
        return 1;
      } else if ( TicTacToe.board[2] === 0) {
        return 2;
      }
      break;
    case "rowMid":
      if ( TicTacToe.board[3] === 0) {
        return 3;
      } else if ( TicTacToe.board[4] === 0) {
        return 4;
      } else if ( TicTacToe.board[5] === 0) {
        return 5;
      }
      break;
    case "rowBot":
      if ( TicTacToe.board[6] === 0) {
        return 6;
      } else if ( TicTacToe.board[7] === 0) {
        return 7;
      } else if ( TicTacToe.board[8] === 0) {
        return 8;
      }
      break;
    case "colLeft":
      if ( TicTacToe.board[0] === 0) {
        return 0;
      } else if ( TicTacToe.board[3] === 0) {
        return 3;
      } else if ( TicTacToe.board[6] === 0) {
        return 6;
      }
      break;
    case "colMid":
      if ( TicTacToe.board[1] === 0) {
        return 1;
      } else if ( TicTacToe.board[4] === 0) {
        return 4;
      } else if ( TicTacToe.board[7] === 0) {
        return 7;
      }
      break;
    case "colRight":
      if ( TicTacToe.board[2] === 0) {
        return 2;
      } else if ( TicTacToe.board[5] === 0) {
        return 5;
      } else if ( TicTacToe.board[8] === 0) {
        return 8;
      }
      break;
    case "diagLeft":
      if ( TicTacToe.board[0] === 0) {
        return 0;
      } else if ( TicTacToe.board[4] === 0) {
        return 4;
      } else if ( TicTacToe.board[8] === 0) {
        return 8;
      }
      break;
    case "diagRight":
      if ( TicTacToe.board[2] === 0) {
        return 2;
      } else if ( TicTacToe.board[4] === 0) {
        return 4;
      } else if ( TicTacToe.board[6] === 0) {
        return 6;
      }
      break;
    default:
      break;
  }

};

// Alt moves the computer can take if there is no winning nor blocking move to make

TicTacToe.altMove = function() {
  if ( TicTacToe.board[4] === 0) {
    return 4;
  } else if ( TicTacToe.board[0] === 0) {
    return 0;
  } else if ( TicTacToe.board[2] === 0) {
    return 2;
  } else if ( TicTacToe.board[4] === 0) {
    return 4;
  } else if ( TicTacToe.board[6] === 0) {
    return 6;
  } else if ( TicTacToe.board[8] === 0) {
    return 8;
  } else if ( TicTacToe.board[1] === 0) {
    return 1;
  } else if ( TicTacToe.board[7] === 0) {
    return 7;
  } else if ( TicTacToe.board[3] === 0) {
    return 3;
  } else if ( TicTacToe.board[5] === 0) {
    return 5;
  }
};

TicTacToe.move = function(row) {
    var hole = TicTacToe.findHole(row);
    var placement = TicTacToe.convertToID(hole);
    TicTacToe.changeBoard(placement, TicTacToe.computer);
    $("#" + placement).html("<i class='"+ TicTacToe.computerIs + "'></i>");
    return;
};

// restarts the board. true equals a full restart, false equals a board clear
TicTacToe.restart = function(bool) {
  if (bool) {
  TicTacToe.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  TicTacToe.playerIs = "";
  TicTacToe.computerIs = "";
  TicTacToe.winner = false;
  $("td").html("");
  $("#o").addClass("choices").removeClass("picked");
  $("#x").addClass("choices").removeClass("picked");
  alertBox.html("");
  } else {
    TicTacToe.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    TicTacToe.winner = false;
    $("td").html("");
    alertBox.html("");
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

  } else if (TicTacToe.winner) {
    alertBox.html("Please restart to go again.");

  } else if (TicTacToe.playerIs !== "") {

    //Plays the game
    alertBox.html("");

    TicTacToe.changeBoard(tdName, TicTacToe.player);

    $("#" + tdName).html("<i class='" + TicTacToe.playerIs + "'></i>");

     if(TicTacToe.checkForWin(TicTacToe.board, TicTacToe.player)){
      $(".winner").fadeIn();
      TicTacToe.winner = true;
      $("#winning-player").html("The player is the winner!");

    } else if(TicTacToe.checkForDraw(TicTacToe.board)){
      $(".winner").fadeIn();
      TicTacToe.winner = true;
      $("#winning-player").html("It is a draw.");

    }

    TicTacToe.computerTurn();

    if(TicTacToe.checkForWin(TicTacToe.board, TicTacToe.computer)){
     $(".winner").fadeIn();
     TicTacToe.winner = true;
     $("#winning-player").html("The computer is the winner!");

      } else if(TicTacToe.checkForDraw(TicTacToe.board)){

       $(".winner").fadeIn();
       TicTacToe.winner = true;
       $("#winning-player").html("It is a draw.");

     }

  }  else {
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
    TicTacToe.firstMove();

  } else {
    alertBox.html("You already picked a side!");
  }

});

$("#x").click(function() {

  if (TicTacToe.playerIs === "") {

    alertBox.html("");
    TicTacToe.setPlayer("fa fa-times", "fa fa-circle-o");
    $("#x").addClass("picked").removeClass("choices");
    TicTacToe.firstMove();

  } else {
    alertBox.html("You already picked a side!");
  }

});

$("#restart").click(function() {

  TicTacToe.restart(true);
  $(".winner").fadeOut();

});

$("#clear-board").click(function() {

  TicTacToe.restart(false);
  $(".winner").fadeOut();

});
