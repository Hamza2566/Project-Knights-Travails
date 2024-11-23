export function createBoard() {
    const board = Array.from({ length: 8 }, () => Array(8).fill(-1));
    return board;
}

 export const chessboard = createBoard();

 export function printBoard(board) {
    for (const row of board) {
        console.log(row.join(' '));
    }
}
export function makeMove(board, x, y, moveCount) {
    board[x][y] = moveCount; 
}

export function knightMoves(start,target){
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
const queue = [[start, [start]]];
const visited = new Set();
visited.add(start.toString()); 
while (queue.length > 0) {
    const [current, path] = queue.shift(); 
    const [currentX, currentY] = current;

    if (current[0] === target[0] && current[1] === target[1]) {
        return { moves: path.length - 1, path };
    }
    for (const move of moves) {
        const newX = currentX + move[0];
        const newY = currentY + move[1];
        const newPosition = [newX, newY];

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            if (!visited.has(newPosition.toString())) {
                visited.add(newPosition.toString());
                queue.push([newPosition, [...path, newPosition]]); 
            }
        }
    }
}

return { moves: -1, path: [] }; 

}

