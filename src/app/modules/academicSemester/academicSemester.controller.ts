import { AcademicSemester } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemester(req.body);

  sendResponse<AcademicSemester>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getAllAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, [
    'startMonth',
    'endMonth',
    'code',
    'searchTerm',
  ]);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await AcademicSemesterService.getAllAcademicSemester(
    filters,
    options
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semesters retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
};
