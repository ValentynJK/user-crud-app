/*
  Warnings:

  - You are about to drop the column `breed` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "breed",
DROP COLUMN "owner",
ADD COLUMN     "last_name" TEXT NOT NULL DEFAULT E'';
