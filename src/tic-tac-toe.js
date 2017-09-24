class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],
            [null,null,null],
            [null,null,null]];
        this.player = 'x';
        this.winner = false;
        this.count = 0;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        var currentPlayer = this.getCurrentPlayerSymbol();
        if(this.matrix[rowIndex][columnIndex]) return;
        this.matrix[rowIndex][columnIndex] = currentPlayer;
        this.count++;
        var str = currentPlayer == 'x' ? 'xxx' : 'ooo';
        if(this.matrix[rowIndex].join('') == str
            ||(this.matrix.map(a => a[columnIndex])).join('') == str
        ||(([].concat(this.matrix[0][0]).concat(this.matrix[1][1]).concat(this.matrix[2][2])).join('') == str)
        ||(([].concat(this.matrix[0][2]).concat(this.matrix[1][1]).concat(this.matrix[2][0])).join('') == str))
        this.winner = currentPlayer;
        this.player = this.player == 'x' ? 'o':'x';
    }

    isFinished() {
        return this.noMoreTurns()  || (this.getWinner() != null);
    }

    getWinner() {
        return this.winner ? this.winner : null;
    }

    noMoreTurns() {
        return this.count == 9;
    }

    isDraw() {
        return this.isFinished() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
