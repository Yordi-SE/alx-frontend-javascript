export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(all) {
      return Object.keys(all).length;
    },
  }
  return obj
}
