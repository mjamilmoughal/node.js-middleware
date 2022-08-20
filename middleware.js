function headersVerificationMiddleware(req, res, next) {
  if (!req.headers["some-key"]) {
    console.log("Invalid request");
    res.send("Invalid request");
  }
  console.log("Inside Middleware");
  next();
}

module.exports = headersVerificationMiddleware;
