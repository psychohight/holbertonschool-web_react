interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 5,
  };
  
  console.log(director1);

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage:
  console.log(printTeacher("John", "Doe")); // Output: "J. Doe"

  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
  }
  
  interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage:
  const student = new StudentClass("Jane", "Doe");
  console.log(student.displayName());      // Output: "Jane"
  console.log(student.workOnHomework());   // Output: "Currently working"
  