//Constraints = Unique primaru or foreign keys

//ADD column
ALTER TABLE students
ADD Email varchar(255);

//CHANGE column Email to have varchar 500
ALTER TABLE students
MODIFY COLUMN Email VARCHAR(500);

//Delete column
ALTER TABLE students
DROP COLUMN Email;