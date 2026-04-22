//trigger = auto executed operation of a specific event
//1.right click table and select "Alter Table", "Triggers"
//2.select before after or whatever


//or by query:
CREATE DEFINER = CURRENT_USER TRIGGER `university`.`events_BEFORE_INSERT` BEFORE INSERT ON `events` FOR EACH ROW
BEGIN
END

//https://www.linkedin.com/learning/mysql-advanced-topics/updating-with-triggers?resume=false&u=43268076
//events istert, delete, update trigger
DELIMITER $$ //trigger 
CREATE TRIGGER `events_AFTER_INSERT` AFTER INSERT ON `events` //on new event inserted into events table, we want to update the lastAddedEventName column in students table for the student who organized the event
FOR EACH ROW
BEGIN //for each newly insterted evet, we find student whose id matches orznaziedId 
UPDATE students SET LastAddedEventName = new.Name
WHERE StudentID = new.OrganizerID;
END;

//now on insert new event, the lastAddedEventName column in students table will be updated to the name of the new event for the student who organized it
INSERT INTO events (OrganizerID, Name, Location) VALUES (5, 'New event', 'New location')
