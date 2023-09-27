export default function appendToEachArrayValue(array, appendString) {
  const arra = [];
  for (const idx of array) {
    arra.push(appendString + idx);
  }

  return arra;
}
