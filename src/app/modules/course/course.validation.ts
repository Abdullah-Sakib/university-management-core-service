import { z } from 'zod';

const createCourseValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    code: z.string({
      required_error: 'code is required',
    }),
    credits: z.number({
      required_error: 'credits is required',
    }),
    preRequisiteCourses: z
      .array(
        z.object({
          courseId: z.string({
            required_error: 'courseId is required',
          }),
        })
      )
      .optional(),
  }),
});

export const CourseValidation = {
  createCourseValidation,
};
