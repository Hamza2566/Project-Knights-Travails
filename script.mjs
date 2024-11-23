import { chessboard, knightMoves, makeMove, printBoard } from "./functions.mjs";
makeMove(chessboard, 0, 4, 0); 
printBoard(chessboard)
const startPosition = [0, 0];  
const targetPosition = [7, 7];  
const result = knightMoves(startPosition, targetPosition);
 
console.log(` =>  You Made It In  ${result.moves - 1} Moves! Here's Your Path: 
    [${result.path}]
    `);

