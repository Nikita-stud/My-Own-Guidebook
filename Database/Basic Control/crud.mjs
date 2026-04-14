//POST = insert data into table
//into table students firstname and lastname insert robert and smith
//(all data for for non null columns needs to be added)
//dont need to specify where into if we are inserting into all columns, but if we are only inserting into some columns then we need to specify which columns we are inserting into
//DEFAULT VALUES = null you can add that 
INSERT INTO students (FirstName, LastName)
VALUES ('Robert', 'Smith'),
       ('Robert2', 'Smith2'),
       ('Robert3', 'Smith3');

//READ = get data from table
SELECT EventID, Name FROM events ;
//if event 2 has been selected  
SELECT events.EventID, events.Name, events.Location, students.FirstName, students.LastName, students.Birthday
FROM events
JOIN students ON StudentID=OrganizerID
WHERE EventID = 2

//UPDATE = update data in table
UPDATE students
SET FirstName='Johnny' //the update statement is used to update existing records in a table. The SET clause is used to specify the column to be updated and the new value. In this case, we are updating the FirstName column to 'Johnny' for all records where the FirstName is currently 'John'.
WHERE studentId = 2 //what we want to update, in this case we want to update all records where the FirstName is 'John' to 'Johnny'

//DELETE = delete data from table
DELETE FROM students
WHERE studentId = 2 //the delete statement is used to delete existing records from a table. The WHERE clause is used to specify which records should be deleted. In this case, we are deleting the record where the studentId is 2.

//or
DROP DATABASE university;
TRUNCATE TABLE students; //delete all records from students table but keep the table structure, this is faster than delete from students without where clause, but it cannot be rolled back and it resets the auto-increment counter