-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
