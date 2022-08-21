-- auto-generated definition
create table todos
(
    id           uuid                  not null
        constraint todos_pk
            primary key,
    task         varchar(128)          not null,
    completed    boolean default false not null,
    created_date timestamp
);

alter table todos
    owner to postgres;

create unique index todos_id_uindex
    on todos (id);
