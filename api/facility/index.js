const {
  createFacility,
  updateFacility,
  getFacilities,
  getFacilityByID,
} = require("../../services/facility");

const router = require("express").Router();

router
  .post("/", async (request, response, next) => {
    request.payload = await createFacility(request, response, next);
    next();
  })
  .put("/:id", async (requst, response, next) => {
    requst.payload = await updateFacility(requst, response, next);
    next();
  })
  .get("/", async (requst, response, next) => {
    requst.payload = await getFacilities(requst, response, next);
    next();
  })
  .get("/:id", async (requst, response, next) => {
    requst.payload = await getFacilityByID(requst, response, next);
    next();
  });

module.exports = router;
