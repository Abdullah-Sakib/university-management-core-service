/*
  Warnings:

  - You are about to drop the column `bloodgroup` on the `faculties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "faculties" DROP COLUMN "bloodgroup",
ADD COLUMN     "bloodGroup" TEXT;
