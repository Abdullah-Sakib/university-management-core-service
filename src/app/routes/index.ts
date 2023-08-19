import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.router';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semester',
    routes: AcademicSemesterRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
