import { studentsData } from './constants/constantsLesson8.js';

export class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends User {
  constructor({ firstName, lastName, admissionYear, courseName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return 2023 - this.admissionYear;
  }
}

export class Students {
  constructor(studentsData = []) {
    this.person = studentsData;
  }
}

Students.prototype.getInfo = function () {
  const sortedStudents = this.person.sort((a, b) => {
    const prevStudent = new Student(a);
    const nextStudent = new Student(b);
    return prevStudent.course - nextStudent.course;
  });
  const nowManyYears = sortedStudents.map((student) => {
    const studentInfo = new Student(student);
    return `${studentInfo.fullName} - ${studentInfo.courseName}, ${studentInfo.course} курс`;
  });
  return nowManyYears;
};

export const students = new Students(studentsData);
