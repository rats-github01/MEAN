var uuid = require('uuid');
module.exports = function (req, res, next) {
    req.identifier = uuid.v4();
    next();
};