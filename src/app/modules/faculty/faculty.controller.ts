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

export const FacultyController = {
  createFaculty,
  getAllFaculty,
  getUniqueFacultyById,
  assignCourses,
  removeCourses,
};
