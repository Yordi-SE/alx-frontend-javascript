interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;


interface classStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): 'Currently working';
  displayName(): string;
  
}

class StudentClass implements classStudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
   return 'Currently working' as const;
  }
  displayName() {
    return this.firstName;
  }
}
