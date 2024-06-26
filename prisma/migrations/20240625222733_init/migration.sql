-- CreateTable
CREATE TABLE "PanelSolar" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "capacidadW" INTEGER NOT NULL,
    "fabricante" TEXT NOT NULL,
    "eficiencia" DOUBLE PRECISION NOT NULL,
    "dimensiones" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PanelSolar_pkey" PRIMARY KEY ("id")
);
