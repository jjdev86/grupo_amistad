const { createReport , getReports} = require("../model/report");

exports.create_report = async (req, res) => {
    
    // insert report body
    await createReport(req.body);
    try {
        res.status(200).json('Report created');
      }catch(err) {
        res.status(500).json({
          error: err
        });
      }
};

exports.delete_report = async (req, res) => {

};

exports.change_report = async (req, res) => {

};

exports.get_reports = async (req, res) => {
    // get all reports
    try {
        let response = await getReports();
        res.status(200).json(response);
    }catch (err) {
        res.status(500).json({error: err})
    }

};
