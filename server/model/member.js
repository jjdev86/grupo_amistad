const  {pool} = require('../db/db');

const addMember = async (member) => {
// adds new member to member table
console.log(member, `member`)
  const sql = `INSERT INTO member SET ?`;
  try {
      let member_create = await pool.query(sql, [member]);
      return member_create;
  }catch (err) {
      console.log(err, `error`)
      return err;
  }
};

const getMembers = async () => {
    const sql = `SELECT * FROM member`;
    try {
        let members = await pool.query(sql);
        return members;
    } catch (err) {
        return err;
    }
};

module.exports =  {
addMember,
getMembers
};