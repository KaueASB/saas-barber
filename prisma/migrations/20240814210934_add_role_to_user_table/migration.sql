-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'BARBERSHOP');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLIENT';
