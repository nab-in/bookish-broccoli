import { MigrationInterface, QueryRunner } from 'typeorm';

export class posts1587921928286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    `
        CREATE TABLE public.posts
        (
            id bigint NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
            uid text COLLATE pg_catalog."default" NOT NULL,
            post text COLLATE pg_catalog."default" NOT NULL,
            CONSTRAINT "PK_8ed8d3bde047700b500cfbf1fef" PRIMARY KEY (id)
        )

        TABLESPACE pg_default;

        ALTER TABLE public.posts
            OWNER to postgres;
        
    CREATE TABLE public.comments
    (
        id bigint NOT NULL DEFAULT nextval('comments_id_seq'::regclass),
        uid text COLLATE pg_catalog."default" NOT NULL,
        comment text COLLATE pg_catalog."default" NOT NULL,
        "postId" bigint,
        CONSTRAINT "PK_58e911370e65e3d8a6f37cf6f46" PRIMARY KEY (id),
        CONSTRAINT "FK_6df2a73c2a6cc790312a1de0b29" FOREIGN KEY ("postId")
            REFERENCES public.posts (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
    )

    TABLESPACE pg_default;

    ALTER TABLE public.comments
        OWNER to postgres;
        `;
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
