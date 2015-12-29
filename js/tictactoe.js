var msg = function(text){
    console.log(text);
};

var alertBox = $(".alert"); // Quick alert section grab

// Starts the object 

var TicTacToe = {
    player: 1,
    computer: 2,
    board: [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]],
    playerIs: "",
    computerIs: ""
};

// Checks for a win
                       
TicTacToe.checkForWin = function(playerNum) {
    var num = playerNum * 3;
    if (TicTacToe.board[0][0] + TicTacToe.board[0][1] + TicTacToe.board[0][2] === num ||
        TicTacToe.board[1][0] + TicTacToe.board[1][1] + TicTacToe.board[1][2] === num ||
        TicTacToe.board[2][0] + TicTacToe.board[2][1] + TicTacToe.board[2][2] === num ||
        TicTacToe.board[0][0] + TicTacToe.board[1][0] + TicTacToe.board[2][0] === num ||
        TicTacToe.board[0][1] + TicTacToe.board[1][1] + TicTacToe.board[2][1] === num ||
        TicTacToe.board[0][2] + TicTacToe.board[1][2] + TicTacToe.board[2][2] === num ||
        TicTacToe.board[0][0] + TicTacToe.board[1][1] + TicTacToe.board[2][2] === num ||
        TicTacToe.board[0][2] + TicTacToe.board[1][1] + TicTacToe.board[2][0] === num) {
        return true;
    } else {
        return false;
    }
};

TicTacToe.checkForEnd = function() {

    if (TicTacToe.board[0].indexOf(0) === -1  &&
        TicTacToe.board[1].indexOf(0) === -1  &&
        TicTacToe.board[2].indexOf(0) === -1 ) {

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
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "two":
            TicTacToe.board[0][1] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "three":
            TicTacToe.board[0][2] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "four":
            TicTacToe.board[1][0] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "five":
            TicTacToe.board[1][1] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "six":
            TicTacToe.board[1][2] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "seven":
            TicTacToe.board[2][0] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "eight":
            TicTacToe.board[2][1] = player;
            TicTacToe.checkForWin(player);
            TicTacToe.checkForEnd();
            break;
        case "nine":
            TicTacToe.board[2][2] = player;
            TicTacToe.checkForWin(player);
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
    var idNames = [["one","two","three"],
                   ["four","five","six"],
                   ["seven","eight","nine"]];

    return idNames[row][col];
};

TicTacToe.computerTurn = function() {
    var row = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);
    var counter = 0;

    if (TicTacToe.board[row][col] !== 0) {
        counter++;

        if (counter > 500 ) {
            TicTacToe.computerTurn();
        } else {
            msg("Computer can't go anymore"); // to stop recursion during testing
        }
    } else {
        var placement = TicTacToe.convertToID(row, col);
        $("#" + placement).html("<i class='" + TicTacToe.computerIs + "'></i>");
        TicTacToe.changeBoard(placement, TicTacToe.computer);


    }
};

// Score method for minimax

TicTacToe.score = function(game) {

    if(TicTacToe.checkForWin(2)) {
        return 10;
    } if (TicTacToe.checkForWin(1)) {
        return -10;
    } else {
        return 0;
    }
};

// Minimax method

TicTacToe.minmax = function(depth, player) {
};

// Click event to play the game

$("td").click(function(event){
    var tdName = event.currentTarget.id;

    // Disallows a player to play on a space that is already taken
    if(event.currentTarget.firstChild !== null) {
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