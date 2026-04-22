//PROCEDURES:
//in stored procedures we can use variables, if else statements, loops, and transactions to control the flow of our code and ensure that our database operations are executed correctly and efficiently. By using these features, we can create more complex and powerful stored procedures that can handle a wide range of tasks and scenarios, making it easier to manage and manipulate our data in a way that meets our specific needs and requirements.

DELIMITER $$ //all ; will be treated as part of the procedure until we reach $$

CREATE PROCEDURE insertStudents() //name of the process for future calls
BEGIN //start
    START TRANSACTION; //stuff that can be committed or rolled back
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson1');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson2');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson3');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson4');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson5');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson6');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson7');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson8');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson9');
    INSERT INTO students (firstname, lastname) VALUES ('Robert', 'Robertson10');

    //we are saving data in studentCount 
    //count how many students have the same last name and save the max count in studentCount
    SET @studentCount = (SELECT MAX(C) FROM (SELECT COUNT(*) AS C FROM students GROUP BY lastname) AS result);

    IF (@studentCount > 1) THEN
        ROLLBACK; //if yes then undo all changes
    ELSE
        COMMIT;
    END IF;
END$$ //end because of $$

DELIMITER ; //reset delimiter to default, if you dont declare it, ALL sql code will not work becuase it waits for $$


//run 
CALL insertStudents();




//TRIGGERS:
//triggers are in same folder as the table itself you want to add the trigger to
//This deletes all events organized by a student when that student is deleted from the students table

CREATE TRIGGER students_BEFORE_DELETE //name of trigger is super exact 
    BEFORE DELETE  //when a trigger fires
    ON students FOR EACH ROW //specifies the table and that it will run on each row that is deleted
    BEGIN
        DELETE FROM events 
        WHERE events.OrganizerID = OLD.studentid; //OLD = the row that is being deleted, we want to delete all events organized by the student that is being deleted
    END$$

DELIMITER ;