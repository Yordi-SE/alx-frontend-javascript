export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);
  for (const a of set2) {
    if (!(set.has(a))) {
      return false;
    }
  }
  return true;
}
