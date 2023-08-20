import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';
const router = express.Router();

router.get('/', FacultyController.getAllFaculty);
router.get('/:id', FacultyController.getUniqueFacultyById);

router.post(
  '/',
  validateRequest(FacultyValidation.createFacultyValidation),
  FacultyController.createFaculty
);

export const FacultyRouter = router;
