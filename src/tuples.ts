// Tuples are arrays of fixed length and ordered with specific types
// like super rigid arrays

export default function() {
  const myTuple: [string, number] = ['h', 1];
  const color: [number, number, number] = [255, 0, 45];

  type HTTPResponse = [number, string];

  const ok: HTTPResponse = [200, 'OK'];
  // ok[0] = "200" // typescript will complain
  // ok.push(123); // typescript allow additional data to be inserted
}
