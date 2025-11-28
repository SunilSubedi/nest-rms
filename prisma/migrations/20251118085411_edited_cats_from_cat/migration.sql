/*
  Warnings:

  - You are about to drop the `Cat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cat";

-- CreateTable
CREATE TABLE "cats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cats_pkey" PRIMARY KEY ("id")
);
