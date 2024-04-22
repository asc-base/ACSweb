-- CreateTable
CREATE TABLE "forgot_password_credential" (
    "id" SERIAL NOT NULL,
    "password_credential" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expired_date" TIMESTAMP(3) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "updated_by" INTEGER,

    CONSTRAINT "forgot_password_credential_pkey" PRIMARY KEY ("id")
);
