const  {pool} = require('../db/db');

const addMember = async (member) => {
// adds new member to member table
    member.firstlast = `${member.first_name}${member.last_name}`
  if (await !memberExists(member.firstlast)) {
    try {
        const sql = `INSERT INTO member SET ?`;
        let member_create = await pool.query(sql, [member]);
        return member_create;
    }catch (err) {
        return err;
    }
  } else {
      let err = new Error();
      err.message = "The member already exists"
      throw err;
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

const memberExists = async (member) => {
      const sql = `SELECT EXISTS(SELECT 1 FROM member WHERE firstlast = "${member}")`;
      try {
          let response = await pool.query(sql);
          return Object.values(JSON.parse(JSON.stringify(response))[0]) >= 1; 
      }catch (err) {
          return err;
      }
};

module.exports =  {
addMember,
getMembers
};