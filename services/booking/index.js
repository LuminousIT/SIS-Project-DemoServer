const BookingInfoDB = require("../../model/bookinginfo");
const FacilityInfoDB = require("../../model/facilityinfo");

const createBooking = async (request, response, next) => {
  try {
    const { userID, fID, rfID, timeBooked, id } = request.body;
    if (!userID || !fID)
      throw new Error("user Id and faciltiy ID are required");

    // const facilityIDs = booking.map((item) => item.fID);
    // const times = booking.map((item) => item.timeBooked);
    // check if facility exist for booking
    const faciltiy = await FacilityInfoDB.findOne({ fID }).exec();
    if (!faciltiy) throw new Error("Facility does not exist");
    // update facility with booking
    const uniqueCurrentPeople = Array.from(
      new Set([...faciltiy.currentPeople, userID])
    );

    const updatedTimeBooked = faciltiy.timeBooked.map((item) => {
      if (item.timeslot == timeBooked) {
        return { timeslot: item.timeslot, isBooked: true };
      }
      return item;
    });

    await FacilityInfoDB.updateOne(
      { fID },
      {
        $set: {
          currentPeople: uniqueCurrentPeople,
          timeBooked: updatedTimeBooked,
        },
      }
    );

    // await FacilityInfoDB.updateMany(
    //   { fID: facilityIDs },
    //   {
    //     $set: {
    //       currentPeople: uniqueCurrentPeople,
    //       timeBooked: updatedTimeBooked,
    //     },
    //   }
    // );

    const created = new BookingInfoDB({
      id,
      userID,
      fID,
      rfID,
      timeBooked,
    });
    await created.save();
    if (!created) throw new Error("Booking Creation Failed");
    return response.status(200).json({ status: "success", content: created });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const updateBooking = async (request, response, next) => {
  try {
    const { userID, fID, rfID, timeBooked } = request.body;
    const updated = await BookingInfoDB.updateOne(
      { userID },
      { $set: { rfID, fID, timeBooked } }
    );
    if (!updated) throw new Error("BookingInfo Update failed");
    return response.status(200).json({ status: "success", content: updated });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const getBookings = async (request, response, next) => {
  try {
    const bookings = await BookingInfoDB.find({}).exec();
    if (!bookings) throw new Error("Booking does not exist");
    return response.status(200).json({ status: "success", content: bookings });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const getBookingsByID = async (request, response, next) => {
  try {
    const { id } = request.params;

    const booking_record = await BookingInfoDB.findOne({ userID: id }).exec();
    if (!booking_record) throw new Error("Booking Info does not exist");
    return response
      .status(200)
      .json({ status: "success", content: booking_record });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

module.exports = { getBookings, createBooking, updateBooking, getBookingsByID };
