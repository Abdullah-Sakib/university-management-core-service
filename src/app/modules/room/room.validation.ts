import { z } from 'zod';

const createRoomValidation = z.object({
  body: z.object({
    roomNumber: z.string({
      required_error: 'roomNumber is required',
    }),
    floor: z.string({
      required_error: 'floor is required',
    }),
    buildingId: z.string({
      required_error: 'buildingId is required',
    }),
  }),
});

export const RoomValidation = {
  createRoomValidation,
};
