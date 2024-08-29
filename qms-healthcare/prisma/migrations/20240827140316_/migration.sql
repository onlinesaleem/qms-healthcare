/*
  Warnings:

  - You are about to drop the `ContactSubmission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactSubmission";

-- DropTable
DROP TABLE "Content";

-- CreateTable
CREATE TABLE "contactSubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactSubmission_pkey" PRIMARY KEY ("id")
);
