var msg = function(text){
    console.log(text);
};

var alertBox = $(".alert");

var TicTacToe = {
    player: 1,
    computer: 2,
    board: [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]],
    playerIs: "",
    computerIs: ""
};

                       
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
        console.log("win!");
        return true;
    } else {
        return false;
    }
};

TicTacToe.setPlayer = function(player, computer) {
    TicTacToe.playerIs = player;
    TicTacToe.computerIs = computer;
};

// Changes the array for the board

TicTacToe.changeBoard = function(name, player) {
    switch (name) {
        case "one":
            TicTacToe.board[0][0] = player;
            TicTacToe.checkForWin(player);
            break;
        case "two":
            TicTacToe.board[0][1] = player;
            TicTacToe.checkForWin(player);
            break;
        case "three":
            TicTacToe.board[0][2] = player;
            TicTacToe.checkForWin(player);
            break;
        case "four":
            TicTacToe.board[1][0] = player;
            TicTacToe.checkForWin(player);
            break;
        case "five":
            TicTacToe.board[1][1] = player;
            TicTacToe.checkForWin(player);
            break;
        case "six":
            TicTacToe.board[1][2] = player;
            TicTacToe.checkForWin(player);
            break;
        case "seven":
            TicTacToe.board[2][0] = player;
            TicTacToe.checkForWin(player);
            break;
        case "eight":
            TicTacToe.board[2][1] = player;
            TicTacToe.checkForWin(player);
            break;
        case "nine":
            TicTacToe.board[2][2] = player;
            TicTacToe.checkForWin(player);
            break;
        default:
            break;
    }
};

TicTacToe.computerTurn = function() {
    var row = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);

    if (TicTacToe.board[row][col] !== 0) {
        console.log("Recursion is fun!");
        TicTacToe.computerTurn();
    } else {
        msg("Computer can go there");
    }
};

$("td").click(function(event){
    var tdName = event.currentTarget.id;

    if(event.currentTarget.firstChild !== null) {
        alertBox.html("You can't go there!");
        
    } else if (TicTacToe.playerIs !== "") {

        alertBox.html("");
        
        TicTacToe.changeBoard(tdName, TicTacToe.player);
        
        $("#" + tdName).html("<i class='" + TicTacToe.playerIs + "'></i>");

        TicTacToe.computerTurn();
        
        // check for winner
        // computer goes
        //check for winner again
        
    } else {
        alertBox.html("Pick a side, please.");
    }
});

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
    
    } else {
        alertBox.html("You already picked a side!");
    }

});