const { JsonWebTokenError } = require("jsonwebtoken");
const emailModel = require("./../../../models/email/email.model");

function add(req, res, next) {
  const { domian, emailTo, emailFrom, message } = req.body;
  if (!domian || !emailTo || !emailFrom || !message) {
    res.status(400);
    return res.json({
      err: "Missing minimum one element",
      domian: !!domian,
      emailTo: !!emailTo,
      emailFrom: !!emailFrom,
      message: !!message,
    });
  }
  emailModel.emailDB.create(
    {
      domian,
      emailTo,
      emailFrom,
      message,
    },
    (err, xxx) => {
      if (!!err) {
        res.status(400);
        return res.json({ err: "Data format incorrect" });
      }
      res.send({ message: "saved" });
    }
  );
}

module.exports = add;
