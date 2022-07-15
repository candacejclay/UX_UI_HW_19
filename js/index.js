(function(){
  var words = [
      'Chef',
      'Designer',
      'Driver',
      'Developer',
      'Poet',
      'Teacher',
      'Happy Person'
      ], i = 0;
  setInterval(function(){
      $('#changingword').fadeOut(function(){
          $(this).html(words[i=(i+1)%words.length]).fadeIn();
      });
  }, 3000);
    
})();
