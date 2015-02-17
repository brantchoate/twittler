'use strict';

  $(document).ready(function(){   

    var findUser = function(user){
      return streams.users[user];
    };

    var loadStream = function(){
      $('.tweets').html('');
      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweet"></div>');
        var $img = $('<img>');
        var current_user = findUser(tweet.user);
        $img.attr('src', current_user.photo);
        $tweet.append($img);
        $tweet.append('<h2>' + current_user.name + '<span class="username">@' + tweet.user +'</span><span class="time">&bull; ' + moment(tweet.created_at).fromNow() + '</span></h2>');
        $tweet.append('<p>' + tweet.message + '</p>');
        $tweet.append('<div class="clear"></div>');
        $tweet.appendTo('.tweets');
        index -= 1;
      }
    };


    loadStream();
    window.setInterval(loadStream, 10000);

  });