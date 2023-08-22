import { z } from 'zod';

const createBuildingValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

export const BuildingValidation = {
  createBuildingValidation,
};
