$(document).ready(function(){


  var nbaHTML = '<ul>';
  var nflHTML = '<ul>';
  var soccerHTML = '<ul>';

  var nbaCallback = function(response){
    var nbaArr = response.data.children;

    $.each(nbaArr, function(idx,val){
      nbaHTML += '<li>';
      nbaHTML += '<a href=';
      nbaHTML += "'http://www.reddit.com" + nbaArr[idx].data.permalink + "'>";
      nbaHTML += nbaArr[idx].data.title;
      nbaHTML += '</a>';
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
      nflHTML += '<a href=';
      nflHTML += "'http://www.reddit.com" + nflArr[idx].data.permalink + "'>";
      nflHTML += nflArr[idx].data.title;
      nflHTML += '</a>';
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
      soccerHTML += '<a href=';
      soccerHTML += "'http://www.reddit.com" + soccerArr[idx].data.permalink + "'>";
      soccerHTML += soccerArr[idx].data.title;
      soccerHTML += '</a>';
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