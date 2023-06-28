const { FacilityInfoSchema } = require("../../schemas/facilityinfo");
const FacilityInfoDB = require("../../model/facilityinfo");
const createFacility = async (request, response, next) => {
  try {
    const body = request.body;

    const { error } = FacilityInfoSchema.validate(body);
    if (error) throw new Error(error.message);
    const created_facility = new FacilityInfoDB({ ...body });
    await created_facility.save();
    if (!created_facility) throw new Error("Creation failed");
    return response
      .status(200)
      .json({ status: "success", content: created_facility });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const updateFacility = async (request, response, next) => {
  try {
    const { id } = request.params;

    const facilityExist = await FacilityInfoDB.findOne({ fID: id }).exec();
    if (!facilityExist) throw new Error("Facility does not exist");

    const updated = await FacilityInfoDB.updateOne(
      { fID: id },
      { $set: { ...request.body } }
    );
    if (!updated) throw new Error("Facility Update failed");
    return response.status(200).json({ status: "success", content: updated });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const getFacilities = async (request, response, next) => {
  try {
    const facilities = await FacilityInfoDB.find({}).exec();
    if (!facilities) throw new Error("Facility does not exist");
    return response
      .status(200)
      .json({ status: "success", content: facilities });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const getFacilityByID = async (request, response, next) => {
  try {
    const { id } = request.params;
    const facilities = await FacilityInfoDB.find({ fID: id }).exec();
    if (!facilities) throw new Error("Facility does not exist");
    return response
      .status(200)
      .json({ status: "success", content: facilities });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

const deleteFacilityByID = async (request, response, next) => {
  try {
    const { id } = request.params;
    if (!id) throw new Error("Facility does not exist");
    const facility = await FacilityInfoDB.deleteOne({ fID: id }).exec();
    if (!facility) throw new Error("Facility does not exist");
    return response.status(200).json({ status: "success", content: facility });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ status: "failed", msg: error.message });
  }
};

module.exports = {
  createFacility,
  updateFacility,
  getFacilities,
  getFacilityByID,
  deleteFacilityByID,
};
