

const {addMember, getMembers} = require("../model/member");

exports.add_member = async (req, res) => {
  // call addMember from model to insert into db
  try {
      await addMember(req.body);
      res.status(201).json({
        message: "User created"
      });
  } catch(err) {
      res.status(500).json({
          err: err
      })
  }
};

exports.get_members = async (req, res) => {
    try {
        let members = await getMembers();
        res.status(201).json(members);
    }catch (err) {
        res.status(500).json({
            err: err
        })
    }
};