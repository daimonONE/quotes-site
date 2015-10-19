// JavaScript source code
$(document).ready(function () {

    var setQuote = function (quoteData) {

    };


    
    
    // Your code here.a
    $("#bQuote").click(function () {

        var settings =
        {            
            data: "method=getQuote&format=jsonp&jsonp=parseQuote",
            success: function (data){
                console.log(data);
            },
            error: function() {
                alert('Failed');
            },
            type: 'GET',
            dataType: 'jsonp'
        };        
        $.ajax("http://api.forismatic.com/api/1.0", settings);
    // $.getJSON("http://api.forismatic.com/api/1.0", "", function (data) {
            
    //         //$(".quotes").text(data.contents.quotes[0].quote);
    //     });
     });

});