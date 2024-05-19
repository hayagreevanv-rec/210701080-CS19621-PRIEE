-- Table: public.outpatients

-- DROP TABLE IF EXISTS public.outpatients;

CREATE TABLE IF NOT EXISTS public.outpatients
(
    appointment_id integer NOT NULL DEFAULT nextval('inpatients_admission_id_seq'::regclass),
    patient_id integer,
    appointment_date date,
    appointment_reason character varying(100) COLLATE pg_catalog."default",
    doctor_id integer,
    test_msrmnt_dtl character varying(100) COLLATE pg_catalog."default",
    prescription_dtl character varying(50) COLLATE pg_catalog."default",
    appointment_time time with time zone,
    CONSTRAINT outpatients_pkey PRIMARY KEY (appointment_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.outpatients
    OWNER to postgres;