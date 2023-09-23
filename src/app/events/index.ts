import initFacultyEvents from '../modules/faculty/faculty.events';
import initStudentEvent from '../modules/student/student.events';

export const SubscribeToEvents = () => {
  initStudentEvent();
  initFacultyEvents();
};
