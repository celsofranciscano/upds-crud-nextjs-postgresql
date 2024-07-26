-- Tabla de roles
CREATE TABLE tbroles (
    PK_role SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL UNIQUE,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de usuarios
CREATE TABLE tbusers (
    PK_user SERIAL PRIMARY KEY,
    FK_role INT NOT NULL DEFAULT 67483231,
    firstName VARCHAR(80) NOT NULL,
    lastName VARCHAR(80) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profileImage VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_role) REFERENCES tbroles(PK_role)
);

CREATE TABLE tbgames (
    PK_game SERIAL PRIMARY KEY,
    FK_user INT NOT NULL,
    totalScore INT NOT NULL,
    level INT NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_user) REFERENCES tbusers(PK_user)
);

CREATE TABLE tbscores (
    PK_score SERIAL PRIMARY KEY,
    FK_game INT NOT NULL,
    partialScore INT NOT NULL,
    typeScore VARCHAR(50) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_game) REFERENCES tbgames(PK_game)
);



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

-- CreateIndex
CREATE UNIQUE INDEX "tbroles_role_key" ON "tbroles"("role");

-- CreateIndex
CREATE UNIQUE INDEX "tbusers_email_key" ON "tbusers"("email");

-- AddForeignKey
ALTER TABLE "tbusers" ADD CONSTRAINT "tbusers_FK_role_fkey" FOREIGN KEY ("FK_role") REFERENCES "tbroles"("PK_role") ON DELETE RESTRICT ON UPDATE CASCADE;
