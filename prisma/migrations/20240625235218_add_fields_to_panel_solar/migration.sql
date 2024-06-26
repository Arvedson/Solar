/*
  Warnings:

  - Added the required column `cantidadCeldas` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corrienteImp` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corrienteIsc` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garantiaPotencia` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `garantiaProducto` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxVoltajeSistema` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperaturaOperacion` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoCelda` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tolerancia` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltajeVmp` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voltajeVoc` to the `PanelSolar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PanelSolar" ADD COLUMN     "cantidadCeldas" INTEGER NOT NULL,
ADD COLUMN     "corrienteImp" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "corrienteIsc" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "garantiaPotencia" INTEGER NOT NULL,
ADD COLUMN     "garantiaProducto" INTEGER NOT NULL,
ADD COLUMN     "maxVoltajeSistema" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temperaturaOperacion" TEXT NOT NULL,
ADD COLUMN     "tipoCelda" TEXT NOT NULL,
ADD COLUMN     "tolerancia" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "voltajeVmp" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "voltajeVoc" DOUBLE PRECISION NOT NULL;
