const forceHttps = function(req, res, next) {
  console.log(req);
  if (process.env.NODE_ENV != 'development' && !req.secure) {
       return res.redirect("https://" + req.headers.host + req.url);
    }
    next();
}
module.exports = forceHttps;
