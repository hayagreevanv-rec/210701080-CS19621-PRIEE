-- Table: public.doctors

-- DROP TABLE IF EXISTS public.doctors;

CREATE TABLE IF NOT EXISTS public.doctors
(
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    specialization character varying(50) COLLATE pg_catalog."default",
    doctor_id serial NOT NULL,
    dob date,
    gender "char",
    years_expr integer,
    address character varying(200) COLLATE pg_catalog."default",
    on_duty "char",
    emp_ind "char",
    CONSTRAINT doctors_pkey PRIMARY KEY (email),
    CONSTRAINT doctors_email_key UNIQUE (email),
    CONSTRAINT doctors_user_id_key UNIQUE (user_id),
    CONSTRAINT doctors_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT doctors_gender_check CHECK (gender = 'M'::"char" OR gender = 'F'::"char") NOT VALID,
    CONSTRAINT doctors_on_duty_check CHECK (on_duty = 'Y'::"char" OR on_duty = 'N'::"char") NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.doctors
    OWNER to postgres;