CREATE TABLE IF NOT EXISTS public.inpatients
(
    admission_id serial,
    patient_id integer NOT NULL,
    room_id integer NOT NULL,
    admission_date date NOT NULL,
    admission_reason character varying(100) COLLATE pg_catalog."default",
    primary_doctor_id integer NOT NULL,
    discharge_date date,
    CONSTRAINT inpatients_pkey PRIMARY KEY (admission_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.inpatients
    OWNER to postgres;