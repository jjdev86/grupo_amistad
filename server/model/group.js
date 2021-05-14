const  {pool} = require('../db/db');

const createGroup = async (group) => {

  let query = `INSERT INTO grupo (group_name, leader_first, leader_last, leader_email) VALUES("${group.group_name}", "${group.leader_first}", "${group.leader_last}", "${group.leader_email}")`;
  try {
    let insertGroup = await pool.query(query);
    return insertGroup;
  } catch (err) {
    return err;
  }
};

const getAll = async () => {
  let query = `Select * from grupo`;
  try {
    let allGroups = await pool.query(query);
    return allGroups;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createGroup,
  getAll,
};
