/*
  Warnings:

  - Added the required column `garantiaPotencia` to the `Microinversor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garantiaProducto` to the `Microinversor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperaturaOperacion` to the `Microinversor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Microinversor" ADD COLUMN     "garantiaPotencia" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "garantiaProducto" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temperaturaOperacion" TEXT NOT NULL;
