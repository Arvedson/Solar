-- CreateTable
CREATE TABLE "Installer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost_per_kw" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "serviceAreas" TEXT NOT NULL,

    CONSTRAINT "Installer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Installer_email_key" ON "Installer"("email");
