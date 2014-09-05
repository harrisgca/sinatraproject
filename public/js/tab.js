$(document).ready(function(){


  var nbaHTML = '<ul>';
  var nflHTML = '<ul>';
  var soccerHTML = '<ul>';

  var nbaCallback = function(response){
    var nbaArr = response.data.children;

    $.each(nbaArr, function(idx,val){
      nbaHTML += '<li>';
      nbaHTML += nbaArr[idx].data.title;
      nbaHTML += '</li>';
      nbaHTML += "<hr>";
    });

    nbaHTML += "</ul>";
    
    $('#nba').html(nbaHTML);
  }; //end nbaCallback

  var nflCallback = function(response){
    var nflArr = response.data.children;

    $.each(nflArr, function(idx,val){
      nflHTML += '<li>';
      nflHTML += nflArr[idx].data.title;
      nflHTML += '</li>';
      nflHTML += '<hr>';
    });

    nflHTML += "</ul>";
    $('#nfl').html(nflHTML);
  }; //end nflCallback

  var soccerCallback = function(response){
    var soccerArr = response.data.children;

    $.each(soccerArr, function(idx,val){
      soccerHTML += '<li>';
      soccerHTML += soccerArr[idx].data.title;
      soccerHTML += '</li>';
      soccerHTML += '<hr>';
    }); //end soccerCallback

    soccerHTML += "</ul>";

    $('#soccer').html(soccerHTML);
  };

  $.getJSON('http://www.reddit.com/r/nba/new/.json',{limit:7}, nbaCallback);
  $.getJSON('http://www.reddit.com/r/nfl/new/.json',{limit:7}, nflCallback);
  $.getJSON('http://www.reddit.com/r/soccer/new/.json',{limit:7}, soccerCallback);

});