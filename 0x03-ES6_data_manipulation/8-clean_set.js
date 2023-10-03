export default function cleanSet(set, startString) {
  const sum = [];
  if (!(startString)) {
    return '';
  }
  for (const a of set) {
    if (a.startsWith(startString)){
      sum.push(a.slice(startString.length));
    }
  }
  return sum.join('-');
}
