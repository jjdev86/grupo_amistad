const  {pool} = require('../db/db');

const createGroup = async (group) => {
  try {
    let query = `INSERT INTO grupo (group_name) VALUES("${group}")`;
    let response = await pool.query(query);

    return response;
  } catch (err) {
    return err;
  }
};

const getAll = async () => {
  let query = `Select * from grupo`;
  try {
    let res = await pool.query(query);
    return res;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createGroup,
  getAll,
};
