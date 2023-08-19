import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester
);

export const AcademicSemesterRouter = router;
