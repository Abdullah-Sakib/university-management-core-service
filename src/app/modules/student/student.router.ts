import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';
const router = express.Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getUniqueStudentById);

router.post(
  '/',
  validateRequest(StudentValidation.createStudentValidation),
  StudentController.createStudent
);

export const StudentRouter = router;
