/*
  Warnings:

  - You are about to drop the column `package` on the `Project` table. All the data in the column will be lost.
  - Added the required column `packageType` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "packageType" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Project" ("client", "createdAt", "end", "id", "information", "priority", "projectName", "start", "updatedAt") SELECT "client", "createdAt", "end", "id", "information", "priority", "projectName", "start", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
