import express from 'express';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.router';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
