CREATE DATABASE Alabama_State_Parks;

USE Alabama_State_Parks;

CREATE TABLE parks
(
    id INT NOT NULL
    AUTO_INCREMENT,
  name VARCHAR
    (256) NOT NULL,
  longitude DECIMAL
    (9,6),
  latitude DECIMAL
    (8,6),
  address VARCHAR
    (256) NOT NULL,
  hours VARCHAR
    (256) NOT NULL,
  PRIMARY KEY
    (id)
);
