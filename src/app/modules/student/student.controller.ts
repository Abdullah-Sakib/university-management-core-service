import { Student } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { studentFilterableFields } from './student.constants';
import { StudentService } from './student.service';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentService.createStudent(req.body);

  sendResponse<Student>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  });
});

const getAllStudent: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, studentFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await StudentService.getAllStudent(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Students retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getUniqueStudentById: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentService.getUniqueStudentById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student retrived successfully',
    data: result,
  });
});

const updateStudent: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await StudentService.updateStudent(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student updated successfully',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentService.deleteStudent(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student deleted successfully',
    data: result,
  });
});

const myCourses: RequestHandler = catchAsync(async (req, res) => {
  const user = (req as any).user;
  const filter = pick(req.query, ['courseId', 'academicSemesterId']);

  const result = await StudentService.myCourses(user.id, filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Courses data fetched successfully',
    data: result,
  });
});

const getMyCourseSchedules: RequestHandler = catchAsync(async (req, res) => {
  const user = (req as any).user;
  const filter = pick(req.query, ['courseId', 'academicSemesterId']);
  const result = await StudentService.getMyCourseSchedules(user.id, filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Schedules data fetched successfully',
    data: result,
  });
});

const myAcademicInfo: RequestHandler = catchAsync(async (req, res) => {
  const user = (req as any).user;
  const result = await StudentService.getMyAcademicInfo(user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Academic Info data fetched successfully',
    data: result,
  });
});

export const StudentController = {
  createStudent,
  getAllStudent,
  getUniqueStudentById,
  updateStudent,
  deleteStudent,
  myCourses,
  getMyCourseSchedules,
  myAcademicInfo,
};
