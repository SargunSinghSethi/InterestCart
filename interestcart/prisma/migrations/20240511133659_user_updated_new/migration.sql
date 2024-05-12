/*
  Warnings:

  - The `forgetPasswordTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `verifyTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "forgetPasswordToken" DROP NOT NULL,
DROP COLUMN "forgetPasswordTokenExpiry",
ADD COLUMN     "forgetPasswordTokenExpiry" TIMESTAMP(3),
ALTER COLUMN "verifyToken" DROP NOT NULL,
DROP COLUMN "verifyTokenExpiry",
ADD COLUMN     "verifyTokenExpiry" TIMESTAMP(3);
