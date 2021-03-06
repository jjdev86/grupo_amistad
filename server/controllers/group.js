
const { getAll, createGroup } = require("../model/group");
exports.create_group = async (req, res) => {
  // call createGroup from model

  if (req.body.group_name === undefined || req.body.group_name.length < 1) {
    res.status(400).json({
      message: "group_name is undefined",
    });
  } else {
    try {
      let response = await createGroup(req.body);
        res.status(201).json({
          message: response,
        });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
};
// returns all groups
exports.getGroups = async (req, res) => {
  let groups = await getAll();
  try {
    res.status(200).json(groups);
  }catch(err) {
    res.status(500).json({
      error: err
    });
  }
};
exports.change_group = async (req, res) => {};
exports.delete_group = async (req, res) => {};
