/*
  Warnings:

  - You are about to drop the column `token` on the `forgot_password_credential` table. All the data in the column will be lost.
  - Added the required column `is_active` to the `forgot_password_credential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "forgot_password_credential" DROP COLUMN "token",
ADD COLUMN     "is_active" BOOLEAN NOT NULL;
