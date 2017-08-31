
// GET /api/message/message1
exports.getMessage1 = function(req, res, next) {
  return res.json({
    message: 'Authorized: message 1 from api.'
  });
};

// GET /api/message/message2
exports.getMessage2 = function(req, res, next) {
  return res.json({
    message: 'Authorized: message 2 from api.'
  });
};
