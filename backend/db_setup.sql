CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nric VARCHAR(20),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  date_of_birth DATE,
  address VARCHAR(255),
  gender VARCHAR(10)
);

INSERT INTO users (
  username,
  password,
  nric,
  first_name,
  last_name,
  date_of_birth,
  address,
  gender
)
VALUES (
  'testuser',
  'testpassword', 
  'S1234567A',
  'John',
  'Doe',
  '2001-01-01',
  '123 Main St',
  'Male'
);
