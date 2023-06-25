const router = require("express").Router();
const { getHomepage } = require("../services/admin");
const admin_route_handler = require("./admin/index");
const bookings_route_handler = require("./bookings/index");
const facility_route_handler = require("./facility/index");
const rfid_route_handler = require("./rfid/index");

const setup_request = (request, response, next) => {
  request.headers["access-control-allow-origin"] = "*";
  request.headers["access-control-allow-headers"] = "*";

  if (request.method === "OPTIONS") {
    request.headers["access-control-allow-methods"] =
      "GET, POST, PUT, PATCH, DELETE";
    response.status(200).json();
  }

  next();
};

router.use(setup_request);
router.use("/api/v1/admin", admin_route_handler);
router.use("/api/v1/bookings", bookings_route_handler);
router.use("/api/v1/facility", facility_route_handler);
router.use("/api/v1/rfid", rfid_route_handler);
router.use("/", getHomepage);

module.exports = router;
