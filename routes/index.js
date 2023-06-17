const router = require("express").Router();
const admin_route_handler = require("./admin/index");
const bookings_route_handler = require("./bookings/index");
const facility_route_handler = require("./facility/index");

router.use("/api/v1/admin", admin_route_handler);
router.use("/api/v1/bookings", bookings_route_handler);
router.use("/api/v1/facility", facility_route_handler);

module.exports = router;
