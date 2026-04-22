CREATE DATABASE university;
USE university;

//Create Teacher table
CREATE TABLE Teacher(
TeacherID INT PRIMARY KEY AUTO_INCREMENT,
TeacherName VARCHAR(50) NOT NULL
);

//Create Students table
CREATE TABLE Students(
StudentID INT PRIMARY KEY AUTO_INCREMENT,
StudentName VARCHAR(50) NOT NULL
);

//Create Classes where a teacher is always assigned
CREATE TABLE Classes(
ClassID INT PRIMARY KEY AUTO_INCREMENT,
ClassName VARCHAR(50) NOT NULL,
TeacherID INT NOT NULL,
FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);

//Create Students in Classes (Many to Many relationship)
//Since a student can be in many classes and a class can have many students, we need a separate table to represent this relationship, which is called a junction table or associative entity. This table will have foreign keys referencing the primary keys of the Students and Classes tables.
CREATE TABLE InClasses(
id INT AUTO_INCREMENT PRIMARY KEY,
StudentID INT,
ClassID INT,
FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
)

// as points labels the result of the calculation (won * 3 + drawn) as points, this is useful for readability and to refer to the calculated value in other parts of the query, such as in a WHERE clause or ORDER BY clause.
SELECT TeamName, (won * 3 + drawn) as points
FROM Teams
ORDER BY points DESC;