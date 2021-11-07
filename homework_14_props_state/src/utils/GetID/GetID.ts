export function GetID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  const firstPart = Math.random() * 46656 || 0;
  const secondPart = Math.random() * 46656 || 0;
  const firstPart1 = '000'.concat(firstPart.toString(36)).slice(-3);
  const secondPart1 = '000'.concat(secondPart.toString(36)).slice(-3);
  return firstPart1.concat(secondPart1);
}

export default GetID;
