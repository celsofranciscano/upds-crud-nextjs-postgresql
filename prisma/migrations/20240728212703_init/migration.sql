-- CreateTable
CREATE TABLE "tbroles" (
    "PK_role" SERIAL NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbroles_pkey" PRIMARY KEY ("PK_role")
);

-- CreateTable
CREATE TABLE "tbusers" (
    "PK_user" SERIAL NOT NULL,
    "FK_role" INTEGER NOT NULL DEFAULT 67483231,
    "firstName" VARCHAR(80) NOT NULL,
    "lastName" VARCHAR(80) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "profileImage" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbusers_pkey" PRIMARY KEY ("PK_user")
);

-- CreateTable
CREATE TABLE "tbgames" (
    "PK_game" SERIAL NOT NULL,
    "FK_user" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbgames_pkey" PRIMARY KEY ("PK_game")
);

-- CreateTable
CREATE TABLE "tbscores" (
    "PK_score" SERIAL NOT NULL,
    "FK_game" INTEGER NOT NULL,
    "partialScore" INTEGER NOT NULL,
    "typeScore" VARCHAR(50) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbscores_pkey" PRIMARY KEY ("PK_score")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbroles_role_key" ON "tbroles"("role");

-- CreateIndex
CREATE UNIQUE INDEX "tbusers_email_key" ON "tbusers"("email");

-- AddForeignKey
ALTER TABLE "tbusers" ADD CONSTRAINT "tbusers_FK_role_fkey" FOREIGN KEY ("FK_role") REFERENCES "tbroles"("PK_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbgames" ADD CONSTRAINT "tbgames_FK_user_fkey" FOREIGN KEY ("FK_user") REFERENCES "tbusers"("PK_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbscores" ADD CONSTRAINT "tbscores_FK_game_fkey" FOREIGN KEY ("FK_game") REFERENCES "tbgames"("PK_game") ON DELETE RESTRICT ON UPDATE CASCADE;
