const herokuredirect = function(req, res, next) {
  console.log(req.url);
  if (process.env.NODE_ENV != 'development' && req.url === 'https://santiagoorellana.herokuapp.com/home') {
       return res.redirect("https://www.santiagoorellana.com/home");
    }
    next();
}
module.exports = herokuredirect;
