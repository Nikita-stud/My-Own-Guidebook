//request for data = called query
//selected schema is a bit more bold on the left side
CREATE DATABASE university; // in SQL CREATE SCHEMA university does the same
CRETAE DATABASE IF NOT EXISTS university; //same but shows warning
DROP DATABASE university; //delete database
DROP DATABASE IF EXISTS university; //same but shows warning if database does not exist

USE university; //switch to database

//
//Creating a table, what is inside a database
CREATE TABLE students(
StudentID INT AUTO_INCREMENT PRIMARY KEY,  //auto increment means it will create a parameter automatically, studentID is primary key
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL, //NOT null = mandatory
Birthday DATE //not mandatory value
MainTeacherID INT NOT NULL,
//PRIMARY KEY (StudentID) (Can be written like this)
FOREIGN KEY (MainTeacherID) REFERENCES Teacher(TeacherID) //this tables MainTeacherID will hold the primary key from Teacher table, this is how we link tables together, we can also specify what happens when the referenced record is deleted or updated (ON DELETE CASCADE, ON UPDATE CASCADE)

)

double // whole numbers and decimal numbers
decimal(3,2)// 3 whole number and 2 decimal numbers

//
//Returning values  (!!!Has to be in single quotes ' ' + all char are turned into lowercase on search)
SELECT * FROM students; //return all data from students table
SELECT FirstName, LastName FROM students; //return only first and last name from students table
SELECT * FROM students WHERE studentid > 6; //Where sets the condition of what is being returned
SELECT * FROM students WHERE StudentID > 6 AND Birthday > '2002-01-01'; //could be OR
//% = any value starts with a
//_ = only single char has to be after a
//a% = all values that start with a
//%a =all values that finish with a
//%a% = on either side of the words can be other characters but it has to have a in it
// = 'John' = all values with name John
SELECT * FROM students WHERE FirstName LIKE 'a%'; //Like returns if a string starts with a specified string
SELECT * FROM students WHERE REGEXP_LIKE(FirstName, 'w'); //returns all firstname that has "w" in it

//
//Sort Data: (only need DESC since ASC is default behavior)
SELECT FirstName, LastName FROM students ORDER BY LENGTH(FirstName) DESC; //Order by length of the first name  descending
SELECT FirstName, LastName FROM students ORDER BY LENGTH(FirstName) DESC, LENGTH(LastName) DESC. //if two has same length of first name then order by length of last name descending


//
//Aggregate data (calculate)
COUNT() //counts all records
//EXAMPLE: SELECT COUNT(*) FROM students WHERE Birthday > '2002-01-01'; // 2
SUM() //sum all
//SELECT SUM(StudentID) FROM students; //55
AVG() //average value of all
//SELECT AVG(LENGTH(LastName)) FROM students;
DATEDIFF() //difference between two dates, returns days
CURDATE() //current date

MIN() //returns smallest value
//SELECT DATEDIFF(CURDATE(), MIN(Birthday))/365 FROM students; //oldest student, difference between current date and smalles bday is 30 years
MAX() //returns largest value
//SELECT DATEDIFF(CURDATE(),MAX(Birthday))/365 FROM students; //youngest student is 20 years old

//
//Join tables: 4types
//Inner Join: returns only matching records from both tables
//Left Join: returns all records from the left table and matching records from the right table
//Right Join: returns all records from the right table and matching records from the left table
//Full Join: returns all records when there is a match in either left or right table

//Inner Join, we select data from both tables and we specify how the tables are related to each other
//data need to exist in both table that we want to join for it to be listed
//here we get events name and the name of the organizer of the event
//we join events and students tables on the condition that OrganizerID in events table matches StudentID in students table
SELECT events.Name, students.FirstName, students.LastName
FROM events
JOIN students ON events.OrganizerID = students.StudentID;

//Merge all rows together as long as OrganizerID=StudentID
SELECT * FROM students
JOIN Events ON Events.OrganizerID=Students.StudentID

//how many events each student organized, we group by first and last name of the students and count the number of events for each student
SELECT COUNT(Events.Name), students.FirstName, Students.LastName
FROM students
JOIN Events ON Events.OrganizerID=students.StudentID
GROUP BY students.FirstName, students.LastName;

//if we want to include students that did not organize any events, we can use LEFT JOIN instead of JOIN (which is INNER JOIN by default)
SELECT COUNT(Events.Name), students.FirstName, students.LastName
FROM students
LEFT JOIN Events ON Events.OrganizerID=students.StudentID
GROUP BY students.FirstName, students.LastName;

//!!!!MANY TO MANY NEED A SEPARATE TABLE ALWAYS!!!!
//ALWAYS