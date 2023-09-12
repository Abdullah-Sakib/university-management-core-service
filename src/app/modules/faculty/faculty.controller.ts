import { Faculty } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { facultyFilterableFields } from './faculty.constants';
import { FacultyService } from './faculty.service';

const createFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await FacultyService.createFaculty(req.body);

  sendResponse<Faculty>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Faculty created successfully',
    data: result,
  });
});

const getAllFaculty: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, facultyFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await FacultyService.getAllFaculty(filters, options);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facultys retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getUniqueFacultyById: RequestHandler = catchAsync(async (req, res) => {
  const result = await FacultyService.getUniqueFacultyById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Faculty retrived successfully',
    data: result,
  });
});

const updateOneInDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty updated successfully',
    data: result,
  });
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty delete successfully',
    data: result,
  });
});

const assignCourses: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyService.assignCourses(id, req.body.courses);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course (s) assigned successfully',
    data: result,
  });
});

const removeCourses: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await FacultyService.removeCourses(id, req.body.courses);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course (s) deleted successfully',
    data: result,
  });
});

const myCourses: RequestHandler = catchAsync(async (req, res) => {
  const user = (req as any).user;
  const filter = pick(req.query, ['academicSemesterId', 'courseId']);
  const result = await FacultyService.myCourses(user, filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My courses data fetched successfully!',
    data: result,
  });
});

const getMyCourseStudents: RequestHandler = catchAsync(async (req, res) => {
  const user = (req as any).user;
  const filters = pick(req.query, [
    'academicSemesterId',
    'courseId',
    'offeredCourseSectionId',
  ]);
  const options = pick(req.query, ['limit', 'page']);
  const result = await FacultyService.getMyCourseStudents(
    filters,
    options,
    user
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty course students fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const FacultyController = {
  createFaculty,
  getAllFaculty,
  getUniqueFacultyById,
  deleteByIdFromDB,
  updateOneInDB,
  assignCourses,
  removeCourses,
  myCourses,
  getMyCourseStudents,
};
