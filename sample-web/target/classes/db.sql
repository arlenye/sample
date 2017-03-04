create database test;
-- Table: sample
 DROP TABLE sample;

CREATE TABLE sample
(
  sample_id numeric NOT NULL,
  sample_name varchar(20),
  code varchar(50),
  place varchar(20),
  date timestamp,
  status varchar(2),
  CONSTRAINT pk_sample_id PRIMARY KEY (sample_id)
);

 DROP TABLE common_dictionary;

CREATE TABLE common_dictionary
(
  id numeric NOT NULL auto_increment primary key ,
  dict_type varchar(20),
  label_key varchar(50),
  descr varchar(50)
);
insert into common_dictionary(dict_type,label_key,descr)values('pdDoFilter','abc','abc类code');
insert into common_dictionary(dict_type,label_key,descr)values('pdDoFilter','xyz','xyz类code');

insert into common_dictionary(dict_type,label_key,descr)values('common','co','co类');
insert into common_dictionary(dict_type,label_key,descr)values('common','wo','wo类');

INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (1,'sample_name1', 'code', 'place', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (2,'sample_name2', 'code2', 'place2', now(), '0');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (3,'sample_name3', 'code', 'place', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (4,'sample_name4', 'code2', 'place2', now(), '0');
    
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (5,'sample_name5', 'code', 'place', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (6,'sample_name6', 'code2', 'place2', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (7,'sample_name7', 'code', 'place', now(), '0');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (8,'sample_name8', 'code2', 'place2', now(), '1');
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (9,'sample_name9', 'abc6', 'place', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (10,'sample_name10', 'abc5', 'place2', now(), '0');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (11,'sample_name11', 'abc', 'place', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (12,'sample_name12', 'abc2', 'place2', now(), '1');
    
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (13,'sample_nam13', 'xyz3', 'place', now(), '0');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (14,'sample_name14', 'xyz2', 'place2', now(), '1');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (15,'sample_name15', 'xyz1', 'place', now(), '0');
    
INSERT INTO sample(
            sample_id, sample_name, code, place, date, status)
    VALUES (16,'sample_name16', 'xyz2', 'place2', now(), '0');
