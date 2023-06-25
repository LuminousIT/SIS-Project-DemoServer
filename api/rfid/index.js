const {
  createRfid,
  getRfid,
  getRfidByID,
  updateRfid,
} = require("../../services/rfid");

const router = require("express").Router();

router.route("/").get(getRfid);
router.route("/:id").get(getRfidByID);
router.route("/").post(createRfid);
router.route("/:id").patch(updateRfid);

// router
//   .post("/", async (request, response, next) => {
//     request.payload = await createRfid(request, response, next);
//     next();
//   })
//   .put("/:id", async (requst, response, next) => {
//     requst.payload = await updateRfid(requst, response, next);
//     next();
//   })
//   .get("/", async (requst, response, next) => {
//     requst.payload = await getRfid(requst, response, next);
//     next();
//   })
//   .get("/:id", async (requst, response, next) => {
//     requst.payload = await getRfidByID(requst, response, next);
//     next();
//   });

module.exports = router;
