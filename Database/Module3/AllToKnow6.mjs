//you can call procedures
async rentARoom(userId, roomId, startDate, endDate) {
        sequelize.query('CALL insert_reservation(:UserId, :RoomId, :StartDate, :EndDate)',{ replacements:
        {
        RoomId: roomId,
        UserId: userId,
        StartDate: startDate,
        EndDate: endDate
        }}).then( result => {
        return result
            }).catch( err => {
                return (err)
            })
    }


//recognising the user if they are logged in an what role they have
//always store user ID and role inside session


//
Op.eq – equal
Op.ne – not equal
Op.gte – greater than or equal
Op.gt – greater than
Op.lte – less than or equal
Op.lt – less than
Op.not – SQL NOT operator equivalent
Op.is – SQL IS operator equivalent
Op.like – SQL LIKE operator equivalent

const { Op } = require("sequelize");
