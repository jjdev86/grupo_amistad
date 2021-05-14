const { pool } = require("../db/db");

const createReport = async (report) => {
  const sql = 
        `INSERT INTO report SET ?`;
  try {
    console.log(report);
    let reportCreated = await pool.query(sql, [report]);
    return reportCreated;
  } catch (err) {
    console.log(err, "error?");
    return err;
  }
};

const getReports = async () => {
  const sql = `Select * from report`;
  try {
    let report = await pool.query(sql);
    return report;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createReport,
  getReports,
};
