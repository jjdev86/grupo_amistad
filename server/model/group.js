const  {pool} = require('../db/db');

const createGroup = async (group) => {
  try {
    let query = `INSERT INTO grupo (group_name) VALUES("${group}")`;
    let response = await pool.query(query);

    return response;
  } catch (err) {
      console.log(err)
    return err;
  }
};

const getAll = async () => {
  console.log("request came in to model");
  let query = `Select * from grupo`;
  try {
    let res = await pool.query(query);
    console.log(res, `response from db`);
    return res;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createGroup,
  getAll,
};
