export default function arrays() {
  const activeUsers: string[] = [];
  activeUsers.push('steven');

  const ageList: number[] = [45, 56, 13];
  ageList[0] = 90;

  const bools: Array<boolean> = [];
  bools.push(true);
  bools.push(false);

  type Point = {
    x: number;
    y: number;
  };

  const coords: Point[] = [];
  coords.push({ x: 23, y: 8 });
  coords.push({ x: 7, y: 21 });

  // multi-dimensional array
  const board: string[][] = [];
  board.push(['X', '0', 'X']);
  board.push(['X', '0', 'X']);
  board.push(['X', '0', 'X']);

  for (let row of board) {
    console.log(row);
  }
}
