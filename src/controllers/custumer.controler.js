const Custumer = require("../schemas/custumer.schema");

const getCustumer = async (req, res) => {
  try {
    const custumer = await Custumer.find();
    return res.status(200).json({
      ok: true,
      message: "Get Custumer",
      data: custumer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error get Custumers",
    });
  }
};
const createCustumer = async (req, res) => {
  try {
    const { name, email, enterprise, telephone } = req.body;
    const custumer = new Custumer({ name, email, enterprise, telephone });
    const custumerSaved = await custumer.save();

    return res.status(200).json({
      ok: true,
      message: "custumer created",
      data: custumerSaved,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error creating custumer",
    });
  }
};
const updateCustumer = async (req, res) => {
  try {
    const { id, name, email, enterprise, telephone } = req.body;
    const custumerExists = await Custumer.exists({ _id: id });
    if (!custumerExists)
      return res.status(404).json({
        ok: false,
        message: "Custumer not found",
      });
    const custumerUpdated = await Custumer.findOneAndUpdate(
      { _id: id },
      { name, email, enterprise, telephone },
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      message: "Custumer updated",
      data: custumerUpdated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error updating custumer",
    });
  }
};
const deleteCustumer = async (req, res) => {
  try {
    const { id } = req.body;
    Custumer.findOneAndDelete({ _id: id }, (err, custumerDeleted) => {
      if (err)
        return res.status(500).json({
          ok: false,
          message: "Error deleting custumer",
        });
      if (!custumerDeleted)
        return res.status(404).json({
          ok: false,
          message: "custumer not found",
        });
      return res.status(200).json({
        ok: true,
        message: "custumer deleted",
        data: custumerDeleted,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error deleting custumer",
    });
  }
};

module.exports = {
  getCustumer,
  createCustumer,
  updateCustumer,
  deleteCustumer,
};
