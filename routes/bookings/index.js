const {
  createBooking,
  updateBooking,
  getBookings,
  getBookingsByID,
} = require("../../services/booking");

const router = require("express").Router();

router.route("/").get(getBookings);
router.route("/:id").get(getBookingsByID);
router.route("/").post(createBooking);
router.route("/:id").patch(updateBooking);

module.exports = router;
