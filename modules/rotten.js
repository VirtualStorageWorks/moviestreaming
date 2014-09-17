var rotten = require("rotten-api")("zd9hb67xtun374wvwh5f6ngz");

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
