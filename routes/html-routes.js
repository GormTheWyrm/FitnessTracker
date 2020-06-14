//Dependencies
var path = require("path");   //do I need this?
// I hope I dont need to use router instead of app...

module.exports = function (app) {
    //home page should be index and it will call api/workouts
    //...for some reason index.html is already coming up... might be browser trying to be smart?
    //need html route /stats
    //need html route /exercise

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // app.get("/stats", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/stats.html"));
    // });
    app.get('*', function (req, res) {
        res.redirect('/');
      });   //make sure this is not interfering with api routes

};