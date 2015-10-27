"use strict";

 $(window).load(function() {
     $("#blocks").hide();
    $("#blocks").fadeIn(1000);    
 });
// JavaScript source code
$(document).ready(function () {

    
    var blockQuote = $("#blockQuote");
    var blockAuthor = $("#blockAuthor");
    var bNextQuote = $("#bNextQuote");
    var bTweet = $("#bTweet");

    function setQuote(quoteData) {
        blockQuote.text('"' + quoteData.quoteText + '"');
        blockAuthor.text(!quoteData.quoteAuthor?"Author unknown":quoteData.quoteAuthor);
    };


    function getQuote() {
        var apiUrl = 'http://api.forismatic.com/api/1.0/?';
        var params = $.param({
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en'
        });
        var getUrl = apiUrl + params + '&jsonp=?';
        return $.getJSON(getUrl);
    }

    getQuote().success(function (data) {
            setQuote(data);
        });
    
    // Your code here.a
    bNextQuote.click(function () {
        getQuote().success(function (data) {
            setQuote(data);
        });
        // var settings =
        // {            
        //     data: "method=getQuote&format=jsonp&jsonp=parseQuote",
        //     success: function (data){
        //         console.log(data);
        //     },
        //     error: function() {
        //         alert('Failed');
        //     },
        //     type: 'GET',
        //     dataType: 'jsonp'
        // };        
        // $.ajax("http://api.forismatic.com/api/1.0", settings);   
        
        
    });


    bTweet.click(function() {
        var apiUrl = 'https://twitter.com/intent/tweet/?';
        var params = $.param({
            text: 'test',
            url: window.location.href,
            hashtags: 'FamousQuote,QuoteOfTheDay'           
        });
        var resUrl = apiUrl + params;
        var NWin = window.open(resUrl, '', 'height=420,width=550');
        if (window.focus) {
            NWin.focus();
        }        
    });
});