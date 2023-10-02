export default function updateStudentGradeByCity(array, city, newGrades) {
  return array.filter((c) => c.location === city).map((a) => {
    const d = a;
    const checkgrade = newGrades.filter((b) => a.id === b.studentId);
    if (checkgrade.length !== 0) {
      d.grade = checkgrade[0].grade;
    } else {
      d.grade = 'N/A';
    }
    return a;
  });
}
