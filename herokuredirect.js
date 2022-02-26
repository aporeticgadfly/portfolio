const herokuredirect = function(req, res, next) {
  if (process.env.NODE_ENV != 'development' && req.headers.host === 'santiagoorellana.herokuapp.com') {
       return res.redirect("https://www.santiagoorellana.com");
    }
    next();
}
module.exports = herokuredirect;
