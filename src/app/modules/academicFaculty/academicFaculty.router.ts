import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.get('/:id', AcademicFacultyController.getUniqueAcademicFacultyById);

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyValidation),
  AcademicFacultyController.createAcademicFaculty
);

export const AcademicFacultyRouter = router;
