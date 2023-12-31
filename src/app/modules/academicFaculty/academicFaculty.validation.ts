import { z } from 'zod';

const createAcademicFacultyValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidation,
  update,
};
