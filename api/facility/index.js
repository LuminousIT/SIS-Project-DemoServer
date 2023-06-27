const {
  createFacility,
  updateFacility,
  getFacilities,
  getFacilityByID,
  deleteFacilityByID,
} = require("../../services/facility");

const router = require("express").Router();

router.route("/").get(getFacilities);
router.route("/:id").get(getFacilityByID);
router.route("/").post(createFacility);
router.route("/:id").patch(updateFacility);
router.route("/:id").delete(deleteFacilityByID);

module.exports = router;
