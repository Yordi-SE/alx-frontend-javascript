export default function updateUniqueItems(map) {
  const map2 = map;
  for (const [key, value] of map2) {
    if (value === 1) {
      map2.set(key, 100);
    }
  }
  return map2;
}
