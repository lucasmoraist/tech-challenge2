CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table "user"(
id SERIAL primary key,
username varchar(20) not null,
password varchar(100) not null
)

create table teacher(
id SERIAL primary key,
name varchar(50) not null,
school_subject varchar(50) not null
)

alter table teacher
add column user_id int unique

alter table teacher
add constraint fk_teacher_user
foreign key(user_id)
references "user"(id)

create table post(
id UUID primary key,
title varchar(50) not null,
content text not null,
createdAt TIMESTAMP without TIME zone not null
)

alter table post
alter column id set default uuid_generate_v4()

alter table post
add column teacher_id int not null

alter table post
add constraint fk_post_teacher
foreign key (teacher_id)
references teacher(id)
