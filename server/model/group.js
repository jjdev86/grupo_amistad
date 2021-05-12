const  {pool} = require('../db/db');

const createGroup = async (group) => {
  let query = `INSERT INTO grupo (group_name) VALUES("${group}")`;
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
