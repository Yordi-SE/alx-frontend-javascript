export default function getStudentIdsSum(array) {
  return array.reduce((sum, a) => sum + a.id, 0);
}
