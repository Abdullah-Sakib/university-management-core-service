import express from 'express';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { BuildingRouter } from '../modules/building/building.router';
import { CourseRouter } from '../modules/course/course.router';
import { FacultyRouter } from '../modules/faculty/faculty.router';
import { RoomRouter } from '../modules/room/room.router';
import { StudentRouter } from '../modules/student/student.router';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
