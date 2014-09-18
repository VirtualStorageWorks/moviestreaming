var rotten = require("rotten-api")("NeedKeyHere!");

module.exports = {
    findByIMBD : function(imdb) {
        rotten.alias(imdb, function (err, res) {
            if (!err) {
                var movie = res || {};
                console.log(movie);
            }
        });
    }

}
