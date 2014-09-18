var request = require("request");
var parseString = require('xml2js').parseString;

module.exports = {
    test: function()
{
    var result;
    var util = require('util'),
        OperationHelper = require('apac').OperationHelper;

    var opHelper = new OperationHelper({
        awsId: Need awsId here (key),
        awsSecret: Need awsSecret key here,
        assocId: 'streamingmo00-20'
        // xml2jsOptions: an extra, optional, parameter for if you want to pass additional options for the xml2js module. (see https://github.com/Leonidas-from-XIV/node-xml2js#options)
    });


    // execute(operation, params, callback)
    // operation: select from http://docs.aws.amazon.com/AWSECommerceService/latest/DG/SummaryofA2SOperations.html
    // params: parameters for operation (optional)
    // callback(err, parsed, raw): callback function handling results. err = potential errors raised from xml2js.parseString() or http.request(). parsed = xml2js parsed response. raw = raw xml response.

    opHelper.execute('ItemSearch', {
        'SearchIndex': 'Books',
        'Keywords': 'harry potter',
        'ResponseGroup': 'ItemAttributes,Offers'
    }, function (err, results) { // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
        //console.log(results);
        var xml = results;
        parseString(xml, function (err, result) {
            //console.dir(result);
            console.log(result.ItemSearchResponse.OperationRequest);
        });
    });
}
    // output:
    // { ItemSearchResponse:
    //    { '$': { xmlns: 'http://webservices.amazon.com/AWSECommerceService/2011-08-01' },
    //      OperationRequest: [ [Object] ],
    //
};
