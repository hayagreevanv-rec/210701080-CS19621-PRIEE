-- Table: public.treatments

-- DROP TABLE IF EXISTS public.treatments;

CREATE TABLE IF NOT EXISTS public.treatments
(
    admission_id integer,
    treatment_date date,
    doctor_id integer NOT NULL,
    care_taker_dtl character varying(100) COLLATE pg_catalog."default",
    test_msrmnt_dtl character varying(100) COLLATE pg_catalog."default",
    discharge_ind "char" NOT NULL,
    patient_id integer NOT NULL,
    treatment_id integer NOT NULL DEFAULT nextval('treatments_treatment_id_seq'::regclass),
    CONSTRAINT treatments_pkey PRIMARY KEY (treatment_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.treatments
    OWNER to postgres;