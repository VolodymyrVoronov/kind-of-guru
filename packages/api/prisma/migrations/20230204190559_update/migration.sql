/*
  Warnings:

  - Added the required column `users` to the `Timetable` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timetable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timetableDate" TEXT NOT NULL,
    "users" TEXT NOT NULL
);
INSERT INTO "new_Timetable" ("id", "timetableDate") SELECT "id", "timetableDate" FROM "Timetable";
DROP TABLE "Timetable";
ALTER TABLE "new_Timetable" RENAME TO "Timetable";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
