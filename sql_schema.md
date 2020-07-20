## Queries for SQL service

create database car-mgmt-service;
use car-mgmt-service;

## Table Creation

create table cars(Model varchar(30) not null  primary key,Engine varchar(30) not null,InfSystem varchar(30) not null,Design varchar(30) not null,location POINT not null );
create table users(Name varchar(30) not null primary key ,Gender char(5) not null,Age int not null);
create table demand(pickuplocation POINT not null,dropofflocation POINT not null,easiestpicklocation POINT not null,latestdroplocation POINT not null,CarFeatures varchar(30) not null unique);

### Insertion

Example Just for Location:

SET @i = 'POINT(79.12 75.59)';
insert into cars values("Hello","Hello123","First","Super",ST_GeomFromText(@i))

### Updation

update cars SET Model="Hatchback 2.0",InfSystem="MIB2+ Supported" where Model ="Ventura";

### Deletion

delete from cars where Model="Clio";