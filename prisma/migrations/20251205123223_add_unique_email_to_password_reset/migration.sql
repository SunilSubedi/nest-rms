/*
  Warnings:

  - You are about to drop the column `token` on the `passwordResets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `passwordResets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tokenHash` to the `passwordResets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "passwordResets" DROP COLUMN "token",
ADD COLUMN     "tokenHash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "passwordResets_email_key" ON "passwordResets"("email");
