//NORMALISATION = process of organizing data in a database, 3 normal forms,first, second and third
//Rule is to never store same data 2 places

//1NF = each cell 1x piece of info, no duplicates, every table with primary key
//No arrays, if we want a big dataset of same type of info like ingredient 1 ingredient 2 etc
//we create a new table for each set of related data
//Each set of data has to have primary key

//LAYOUT
//customer table
//dishes table
//customer_dishes table

//2NF = 1NF + no partial dependency (no column depends on part of "primary key")
//If I had no primary key and table had customer name and dish name, then dish name would depend on customer name, so I would have to create a new table for dishes and then link it to customers through a junction table
//BASICALLY create a table for repeating data and make it my "primary key" that way
//Example:"primary key" consists of two values: event name and date. However, location depends only on the part of the "primary key" – on the event name

//3NF = 2NF + no transitive dependency (no column depends on another non-key column)
//WE should NOT store values that can be derived/calculated from other values in the same table
//Example: age and date of birth, if we have date of birth we can calculate age, so we should not store age in the same table as date of birth, we should store it in a separate table and link it through a foreign key

//DENORMALISATION
//Intentially duplicate info in violation of normalisation rules, all for speed improvement
//If third rule makes it too slow to query data, we can denormalise and store some redundant data to speed up queries, but we have to be careful to keep it consistent and update it when the original data changes

//Database = organized collection of data
//RELATIONAL DATABASE = (called SQL) data is stored in tables, tables are related to each other through keys
//Primary Key = unique id
//Foreign Key = reference of primary key in another table

//Raws = records or tuples --
//Columns = fields or attributes |
//Relation = both rows and columns

INTEGER; //number without decimal
DECIMAL(3, 2); //number with decimal,2.45
FLOAT; //number with decimal
BOOLEAN;
DATE; //YEAR, MONTH, DAY
TIME; //HOUR, MINUTE, SECOND
TIMESTAMP; //DATE + TIME
CHAR(4); //fixed length string
VARCHAR(255); //max length string
TEXT; //long string
NULL;

//Non relational Database = (called NoSQL) data is stored in collections, documents, key-value pairs, or graphs
//good for unstructured data, flexible schema, and horizontal scaling

//TRANSACTION = (IF ERROR OR STOP, ROLLBACK) a sequence of operations performed as a single logical unit of work, must be atomic, consistent, isolated, and durable (ACID properties)

//DBMS = Database Management System, software that allows users to create, manage, and interact with databases (e.g., MySQL, PostgreSQL, MongoDB)
//we use https://dev.mysql.com/downloads/installer/
//DBEAVER = server, but better for MAC
// MySQL = server, software that manages databases and handles queries
// MySQL Workbench = software that allows users to visually design, model, and manage MySQL databases

//Name of table is plural
//Columns are camelCase "FirstName, FavouriteDish"
//We add CustomerID to each for us row to have a unique identifier, and we can use it as a primary key and foreign key in other tables

//Relationships = tables connected through keys https://vimeo.com/990474644/7ae47fef0b?share=copy
//One-to-One = each row in one table is related to one row in another table (e.g., each customer has one profile)
//One-to-Many = each row in one table is related to many rows in another table (e.g., each customer can have many orders)
//Many-to-Many = each row in one table is related to many rows in another table, and vice versa (e.g., each student can enroll in many courses, and each course can have many students)(We would need a junction table to represent this relationship, e.g., Enrollment with StudentID and CourseID as foreign keys)

lower_case_table_names = 0; //Linus names are stored exactly as typed
lower_case_table_names = 1; //Window forces everything to lowercase
lower_case_table_names = 2; //MacOS stores names as given but compares in lowercase

//Fieldnames are CamelCase only for readability, but they are not case sensitive in SQL. However, it's a good practice to be consistent with naming conventions to avoid confusion.

//TO CREATE A DATABASE (DIAGRAM)
//1.Finish up the tables
//2.Top of Mac press DATABASE then Connect to Database...
//3.Stored Connection (add it)
//4.Top of Mac again DATABASE and Reverse Engineer..
//5.Select the tables and continue
