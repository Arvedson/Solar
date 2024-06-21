-- CreateTable
CREATE TABLE "Territorio" (
    "id" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "zonasCubiertas" TEXT[],
    "costoPorKw" DOUBLE PRECISION NOT NULL,
    "indiceRadiacion" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Territorio_pkey" PRIMARY KEY ("id")
);
