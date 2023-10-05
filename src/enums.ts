// Enums allows us to define a set of named constants.
// We can give these constants numeric or string values.

enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

export default function enums() {
  const initialDirection: Direction = Direction.DOWN;
  console.log(initialDirection);

  console.time('check');
  switch (initialDirection.valueOf()) {
    case Direction.UP:
      console.log('moving up.');
      break;
    case Direction.DOWN:
      console.log('moving down.');
      break;
    case Direction.LEFT:
      console.log('moving left.');
      break;
    case Direction.RIGHT:
      console.log('moving right.');
      break;
    default:
      throw new Error('unknown move!');
  }
  console.timeEnd('check');

  const file = Bun.file('./src/arrays.ts');
  console.log(file.type);

  const myStatus = OrderStatus.DELIVERED;
  const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED;
  };
  isDelivered(OrderStatus.RETURNED);
}
