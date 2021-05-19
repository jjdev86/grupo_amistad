const { pool } = require("../db/db");

const createGroup = async (group) => {
  // let query = `INSERT INTO grupo (group_name, leader_first, leader_last, leader_email) VALUES("${group.group_name}", "${group.leader_first}", "${group.leader_last}", "${group.leader_email}")`;
  const sql = `INSERT INTO grupo SET ?`;
  let groupname = group.group_name.split(" ").join("").toLowerCase();
  group.groupname = groupname;

  //  does groupname exist
  if (await isgroupExist(group.groupname)) {
    let err = new Error();
    err.message = "The group name already exists";
    throw err;
  }
  if (await isLeaderEmailExist(group.leader_email)) {
    let err = new Error();
    err.message = "The leader email address already exists";
    throw err;
  }

    // insert new group record
    try {
      let insertGroup = await pool.query(sql, [group]);
      return insertGroup;
    } catch (err) {
      console.log(err, `from insert`)
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

const isgroupExist = async (groupname) => {
  const sql = `SELECT EXISTS(SELECT 1 FROM grupo WHERE groupname = "${groupname}")`;
      try {
          let response = await pool.query(sql);
          return Object.values(JSON.parse(JSON.stringify(response))[0]) >= 1; 
      }catch (err) {
          return err;
      }
};

const isLeaderEmailExist = async (email) => {
  const sql = `SELECT EXISTS(SELECT 1 FROM grupo WHERE leader_email = "${email}")`;

  try {
    let response = await pool.query(sql);
    return Object.values(JSON.parse(JSON.stringify(response))[0]) >= 1;
  }catch(err) {
    return err;
  }

};

module.exports = {
  createGroup,
  getAll,
};
