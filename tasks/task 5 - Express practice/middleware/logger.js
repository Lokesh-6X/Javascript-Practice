const logger = (req, res, next) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
  next(); // important to move to next middleware or route
};

module.exports = logger;