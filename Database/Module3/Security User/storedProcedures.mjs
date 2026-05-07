//If one user can only one reservation
//And we want to change that, we need to do one of these:
//-We can save only the most recent reservation from the user.
//-We can update the user’s reservations only if the last reservation has expired (its end date was before now).
//-We can add the ID field and use it as the key instead, allowing users to have multiple reservations.

//Stored Procedures = functions in database
//when stuff is inserted and there is an error, it will update the record
CREATE PROCEDURE `insert_reservation` (_UserId INT, _RoomId INT, _StartDate DATETIME, _EndDate DATETIME)
BEGIN
//this will try to add a reservation
INSERT INTO Reservations SET UserId = _UserId,  StartDate = _StartDate, EndDate = _EndDate, RoomId = _RoomID
//If the user already has a booking for this room, 
//just update the dates instead of failing
ON DUPLICATE KEY UPDATE StartDate = _StartDate, EndDate = _EndDate;
END

//To call it:
//User 1, Room 1, starting Nov 15 2023, ending Nov 16 2024. If User 1 already has a reservation for Room 1, it just updates the dates
Call insert_reservation(1,1,'2023-11-15 10:00:00', '2024-11-16 10:00:00')
