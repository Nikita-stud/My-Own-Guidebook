//subquery = query inside another query, used to perform operations that require multiple steps, such as filtering, aggregation, or joining data from multiple tables
//use join if you want to combine data from multiple tables, use subquery if you want to perform a calculation or filter data based on the result of another query
//subquery is more readable and easier to understand, but it can be less efficient than a join, especially if the subquery is executed for each row of the outer query, so it's important to consider the specific use case and performance implications when deciding whether to use a subquery or a join.

SELECT FirstName, LastName FROM students //3. returns the first and last name of students
    //2. studentID compares if  = OrganizerID
WHERE StudentID IN ( //1. IN  = stores value of what is returned from inside ()
    SELECT OrganizerID FROM events WHERE Location = 'Hall'
)
ORDER BY LastName 



//4.SELECT * FROM returns all columns from combined result
//1.Table1 = inside () we get all students that start with J and save as S
SELECT * FROM (SELECT * FROM students WHERE FirstName LIKE 'J%') AS S
//2.Table2 = inside () we get all events that are in the hall and save as E
JOIN (SELECT * FROM Events WHERE Location = 'Hall') AS E
ON StudentID = OrganizerID //3.with this we match 2 tables together by comparing StudentID and OrganizerID


//substring = extracts a portion of a string based on the specified starting position and length, it is often used in conjunction with other string functions to manipulate and analyze text data in SQL queries. The syntax for the SUBSTRING function is as follows:
//string = text I am cutting from
//positiom to start cutting = 1 means start from the first character
//length = how many characters to cut
SUBSTRING(string, start, length)
