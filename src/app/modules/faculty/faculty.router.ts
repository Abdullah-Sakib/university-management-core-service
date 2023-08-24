import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';
const router = express.Router();

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  FacultyController.getAllFaculty
);
router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  FacultyController.getUniqueFacultyById
);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(FacultyValidation.createFacultyValidation),
  FacultyController.createFaculty
);

export const FacultyRouter = router;
