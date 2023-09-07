import express from 'express';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { BuildingRouter } from '../modules/building/building.router';
import { CourseRouter } from '../modules/course/course.router';
import { FacultyRouter } from '../modules/faculty/faculty.router';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.router';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.router';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.router';
import { RoomRouter } from '../modules/room/room.router';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.router';
import { StudentRouter } from '../modules/student/student.router';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.router';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semester',
    routes: AcademicSemesterRouter,
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRouter,
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRouter,
  },
  {
    path: '/student',
    routes: StudentRouter,
  },
  {
    path: '/faculty',
    routes: FacultyRouter,
  },
  {
    path: '/building',
    routes: BuildingRouter,
  },
  {
    path: '/room',
    routes: RoomRouter,
  },
  {
    path: '/course',
    routes: CourseRouter,
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes,
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoutes,
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
