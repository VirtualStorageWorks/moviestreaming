/**
 * Created by wptrs on 9/17/2014.
 */
var request = require("request")

module.exports = {

    findByIMDBID: function (imdbid) {
        var headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        var requestBody;
        var options = {
            url: 'http://www.omdbapi.com/?i=' + imdbid,
            method: 'GET',
            headers: headers,
        }
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }
        })
        return 'finished';
    },
    findByTitle: function (title) {
        var headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        var requestBody;
        var options = {
            url: 'http://www.omdbapi.com/?t=' + title,
            method: 'GET',
            headers: headers,
        }
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }
        })
        return 'finished';
    }
}

