const knightAttack = (n, kr, kc, pr, pc) => {
  const board = createBoard(n);
  const queue = [[kr, kc, 0]];
  const visited = new Set();
  visited.add(kr + ',' + kc);

  while (queue.length > 0) {
    const current = queue.shift();
    const [knightRow, knightCol, step] = current;

    if (knightRow === pr && knightCol === pc) {
      return step;
    }

    const neighbors = knightMoves(n, knightRow, knightCol);
    for (let neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborKey = neighborRow + ',' + neighborCol;

      if (!visited.has(neighborKey)) {
        console.log(
          `Knight moves from (${knightRow}, ${knightCol}) to (${neighborRow}, ${neighborCol})`
        );
        visited.add(neighborKey);
        queue.push([neighborRow, neighborCol, step + 1]);
      }
    }
  }
  return null;
};

const createBoard = n => {
  const board = Array(n)
    .fill(n)
    .map(() => Array(n).fill(null));
  return board;
};

const knightMoves = (n, r, c) => {
  // legal moves
  const positions = [
    [r + 2, c + 1],
    [r - 2, c + 1],
    [r + 2, c - 1],
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r + 1, c - 2],
    [r - 1, c - 2],
  ];

  const inboundPositions = [];
  for (let pos of positions) {
    const [newRow, newCol] = pos;
    if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {
      inboundPositions.push(pos);
    }
  }
  return inboundPositions;
};

console.log(knightAttack(8, 0, 0, 0, 0)); // -> 0
console.log(knightAttack(8, 0, 0, 2, 1)); // -> 1
console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
console.log(knightAttack(8, 0, 0, 4, 4)); // -> 3
console.log(knightAttack(8, 7, 7, 5, 6)); // -> 2
console.log(knightAttack(1, 0, 0, 0, 0)); // -> 0
console.log(knightAttack(2, 0, 0, 1, 1)); // -> null
console.log(knightAttack(8, 0, 0, 6, 6)); // -> 4
console.log(knightAttack(5, 0, 0, 4, 2)); // -> 2

module.exports = {
  knightAttack,
};
