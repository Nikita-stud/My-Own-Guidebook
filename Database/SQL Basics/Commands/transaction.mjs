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

//TRANSACTION = group of statements that must ALL be fullfilled to have effect on a database
//ACID = multiple statements treated as a single unit, data must be change according to rules, visible changes by others,, submitteed changes are saved even if crach
//Good for 5000 records, bad for 100000 records
//Is 20 times faster than without transaction
START TRANSACTION;
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
COMMIT;

//SP = stored functions for SQL
//1. on "Stored Procedures" in MySQL Workbench right click and select "Create Stored Procedure"
//2.add function
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`()
BEGIN
DECLARE @studentCount INT; //1.we declare new variable

START TRANSACTION; //2.we start transaction
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');

SET @studentCount = (SELECT COUNT(*) FROM Students); //3.we set value of stendentCount to length
IF @studentCount > 20 THEN //if else statement
    ROLLBACK; //rollback = undo all changes
ELSE
    COMMIT;
END IF;
END

//3.call function if tells us 0 rows effected then there was a rollback
CALL university.new_procedure();
