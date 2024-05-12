/*
  Warnings:

  - You are about to drop the `UserVerification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserVerification" DROP CONSTRAINT "UserVerification_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "forgetPasswordToken" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "forgetPasswordTokenExpiry" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verifyToken" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verifyTokenExpiry" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "UserVerification";
