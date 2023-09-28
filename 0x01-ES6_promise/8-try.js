export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw Error();
    }
    return numerator / denominator;
  } catch (e) {
    throw new Error('cannot divide by 0');
  }
}
