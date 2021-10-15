const iputils = require('../utils/iputils');
const ipservices = require('../services/ip/ipapi')

const location = async (req, res, next) => {
    try {
      const ip = iputils(req);
      const data = await ipservices.getLocation(ip);
      req.currentLocation = data
      next()
    } catch (error) {
      next(error);
    }
  };

module.exports = location;