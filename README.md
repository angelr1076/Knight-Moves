# Knight Attack

A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

### Write a function, knightAttack, that takes in 5 arguments:

`n, kr, kc, pr, pc`

`n = the length of the chess board`<br>
`kr = the starting row of the knight`<br>
`kc = the starting column of the knight`<br>
`pr = the row of the pawn`<br>
`pc = the column of the pawn`<br>

The function should return a number representing the minimum number of moves required for the knight to land on top of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.

The createBoard function here is irrelevant but helps in visualizing the board while testing each position a knight can make and the position of the pawn on the board.
