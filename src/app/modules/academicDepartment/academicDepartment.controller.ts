import { AcademicDepartment } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicDepartmentFilterableFields } from './academicDepartment.constants';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await AcademicDepartmentService.createAcademicDepartment(
      req.body
    );

    sendResponse<AcademicDepartment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Department created successfully',
      data: result,
    });
  }
);

const getAllAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters,
      options
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Departments retrived successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getUniqueAcademicDepartmentById: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await AcademicDepartmentService.getUniqueAcademicDepartmentById(
        req.params.id
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic Department retrived successfully',
      data: result,
    });
  }
);

const updateOneInDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicDepartment updated successfully',
    data: result,
  });
});

const deleteByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicDepartmentService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicDepartment delete successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getUniqueAcademicDepartmentById,
  updateOneInDB,
  deleteByIdFromDB,
};
