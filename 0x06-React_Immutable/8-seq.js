import { seq } from 'immutable';

/**
 * Print the names of students with a score >= 70.
 * 
 * @param {Object} grades - An object with student grades.
 */
function printBestStudents(grades) {
  seq(grades)
    .filter(student => student.score >= 70)
    .forEach(student => {
      const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`${firstName} ${lastName}`);
    });
}
