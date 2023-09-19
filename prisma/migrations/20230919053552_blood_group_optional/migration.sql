/*
  Warnings:

  - You are about to drop the column `bloodgroup` on the `students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "bloodgroup",
ADD COLUMN     "bloodGroup" TEXT;
