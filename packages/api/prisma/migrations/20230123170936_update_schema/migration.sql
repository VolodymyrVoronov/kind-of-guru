/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "joinedCompany" TEXT NOT NULL,
    "home" BOOLEAN NOT NULL DEFAULT true,
    "office" BOOLEAN NOT NULL DEFAULT false,
    "intern" BOOLEAN NOT NULL DEFAULT true,
    "extern" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
