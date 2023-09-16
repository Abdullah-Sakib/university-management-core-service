import { AcademicFaculty } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFaculty(req.body);

  sendResponse<AcademicFaculty>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

const getAllAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await AcademicFacultyService.getAllAcademicFaculty(
    filters,
    options
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Facultys retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getUniqueAcademicFacultyById: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await AcademicFacultyService.getUniqueAcademicFacultyById(
      req.params.id
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Faculty retrived successfully',
      data: result,
    });
  }
);

const updateOneInDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicFaculty updated successfully',
    data: result,
  });
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicFaculty delete successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getUniqueAcademicFacultyById,
  updateOneInDB,
  deleteByIdFromDB,
};
