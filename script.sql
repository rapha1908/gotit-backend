CREATE TABLE app_user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL
);

CREATE TABLE condominio (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    morada VARCHAR(255) NOT NULL
);

CREATE TABLE admin_condominio (
    admin_id UUID NOT NULL,
    condominio_id UUID NOT NULL,

    PRIMARY KEY (
        admin_id,
        condominio_id
    ),

    FOREIGN KEY (admin_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    FOREIGN KEY (condominio_id)
        REFERENCES condominio(id)
        ON DELETE CASCADE
);

CREATE TABLE tasklist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,
    condominio_id UUID NOT NULL,
    prestador_id UUID,

    FOREIGN KEY (condominio_id)
        REFERENCES condominio(id)
        ON DELETE CASCADE,

    FOREIGN KEY (prestador_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL
);

CREATE TABLE task (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,
    tasklist_id UUID NOT NULL,

    FOREIGN KEY (tasklist_id)
        REFERENCES tasklist(id)
        ON DELETE CASCADE
);