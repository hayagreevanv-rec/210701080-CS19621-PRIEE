CREATE TABLE IF NOT EXISTS public.rooms
(
    room_id integer NOT NULL,
    room_area numeric(6,2) NOT NULL,
    curr_avbl_occ_capacity integer NOT NULL,
    total_occ_capacity integer NOT NULL,
    rent_amt numeric(7,2) NOT NULL,
    availability "char" NOT NULL,
    CONSTRAINT rooms_pkey PRIMARY KEY (room_id),
    CONSTRAINT rooms_availability_check CHECK (availability = 'Y'::"char" OR availability = 'N'::"char") NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rooms
    OWNER to postgres;