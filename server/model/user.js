const  {pool} = require('../db/db');
// createUser take a user object
const createUser = async user => {
  // insert records to db
  const query = `INSERT INTO User (email, password, role, first_name, last_name) VALUES ("${user.email}", "${user.password}","${user.role}","${user.first_name}", "${user.last_name}")`;

  const newUser = await pool.query(query);
  try {
    return newUser;
  } catch (err) {
    return err;
  }
};

const retrivePassword = async user => {

  // SELECT CONVERT(column USING utf8)
  const query = `SELECT CONVERT (password USING utf8) password from User
                  WHERE email = '${user.email}'`;
  let hash = await pool.query(query);
  try {
    if (hash.length > 0) {
      return hash[0].password;
    } else {
      return hash = undefined;
    }
  }catch(err) {
    console.log(err);
    return err;
  }

};

const deleteUser = async id => {
  let isDeleted;
  let query = `DELETE FROM user
                WHERE id = ${id}`;
  let removed = await pool.query(query);
  // console.log(removed.affectedRows, `line 69`)
  if (removed.affectedRows == 1) {
    console.log(removed.affectedRows, `line 74`)
    isDeleted = true;
  } else {
    console.log(removed.affectedRows, `line 74`)
    isDeleted = false;
  }
  return isDeleted;
};

const allUsers = async () => {
  let query = 'SELECT id, email, role, first_name, last_name from user';

  let users = await pool.query(query);
  try {
    return users;
  }catch(err) {
    return err;
  }
};

module.exports = {
  createUser,
  retrivePassword,
  deleteUser,
  allUsers
};
