import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartment);
router.get(
  '/:id',
  AcademicDepartmentController.getUniqueAcademicDepartmentById
);

router.post(
  '/',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation
  ),
  AcademicDepartmentController.createAcademicDepartment
);

export const AcademicDepartmentRouter = router;
