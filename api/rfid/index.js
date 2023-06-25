const {
  createRfid,
  getRfid,
  getRfidByID,
  updateRfid,
} = require("../../services/rfid");

const router = require("express").Router();

router
  .post("/", async (request, response, next) => {
    request.payload = await createRfid(request, next);
    next();
  })
  .put("/:id", async (requst, response, next) => {
    requst.payload = await updateRfid(requst, next);
    next();
  })
  .get("/", async (requst, response, next) => {
    requst.payload = await getRfid(requst, next);
    next();
  })
  .get("/:id", async (requst, response, next) => {
    requst.payload = await getRfidByID(requst, next);
    next();
  });

module.exports = router;
