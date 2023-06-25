const { RfidSchema } = require("../../schemas/rfid");
const RfidDB = require("../../model/rfid");

const createRfid = async (request, response, next) => {
  try {
    const { body } = request;
    const { error } = RfidSchema.validate(body);
    if (error) throw new Error(error);

    const { userID, rfID } = body;

    const created_record = new RfidDB({
      ...body,
    });
    await created_record.save();
    if (!created_record) throw new Error("Rfid creation failed");

    return response
      .status(201)
      .json({ status: "success", content: created_record });
  } catch (error) {
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const updateRfid = (request, response, next) => {
  try {
  } catch (error) {}
};

const getRfid = async (request, response, next) => {
  try {
    const rfid_records = await RfidDB.find({}).exec();
    if (!rfid_records) throw new Error("rfid does not exist");
    return response
      .status(201)
      .json({ status: "success", content: rfid_records });
  } catch (error) {
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const getRfidByID = (request, response, next) => {
  try {
  } catch (error) {}
};

module.exports = {
  createRfid,
  updateRfid,
  getRfidByID,
  getRfid,
};
