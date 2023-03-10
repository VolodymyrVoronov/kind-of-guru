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
    "roles" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
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

-- CreateTable
CREATE TABLE "Timetable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timetableDate" TEXT NOT NULL
);
