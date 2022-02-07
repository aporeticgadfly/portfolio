const herokuredirect = function(req, res, next) {
  if (process.env.NODE_ENV != 'development' && req.headers.host === 'santiagoorellana.herokuapp.com') {
       return res.redirect("https://www.santiagoorellana.com/home");
    }
    next();
}
module.exports = herokuredirect;
