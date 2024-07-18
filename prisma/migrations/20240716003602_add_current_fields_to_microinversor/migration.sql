/*
  Warnings:

  - Added the required column `corrienteEntrada` to the `Microinversor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corrienteSalida` to the `Microinversor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Microinversor" ADD COLUMN     "corrienteEntrada" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "corrienteSalida" DOUBLE PRECISION NOT NULL;
