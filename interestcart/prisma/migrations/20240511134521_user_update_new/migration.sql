/*
  Warnings:

  - The `forgetPasswordTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `verifyTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "forgetPasswordTokenExpiry",
ADD COLUMN     "forgetPasswordTokenExpiry" INTEGER,
DROP COLUMN "verifyTokenExpiry",
ADD COLUMN     "verifyTokenExpiry" INTEGER;
