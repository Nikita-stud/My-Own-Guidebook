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

//TRANSACTION = (IF ERROR OR STOP, ROLLBACK) a sequence of operations performed as a single logical unit of work, must be atomic, consistent, isolated, and durable (ACID properties)
