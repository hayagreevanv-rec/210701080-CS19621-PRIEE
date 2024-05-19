CREATE TABLE IF NOT EXISTS public.patients
(
    patient_id integer NOT NULL DEFAULT nextval('patients_patient_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    dob date,
    age integer,
    gender "char",
    enrol_date date NOT NULL,
    enrol_reason character varying(1000) COLLATE pg_catalog."default",
    doctor_id integer,
    mobile_phone bigint NOT NULL,
    address character varying(100) COLLATE pg_catalog."default",
    last_visit_date date,
    death_ind "char" NOT NULL,
    CONSTRAINT patients_pkey PRIMARY KEY (patient_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.patients
    OWNER to postgres;