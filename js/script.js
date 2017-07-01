$(document).ready(function() {
  // On page load, calls function to pick first quote and use that quote for tweet
  changeQuote();
  setUpTweet();

  // Calls function for changing quote whenever "new quote" button is pressed
  $(".btn-new-quote").on("click", function() {
    changeQuote();
    setUpTweet();
  });



  // $(".btn-new-quote").click(function() {
  //   var textToTweet = $(".quote>h2").text();
  //   console.log(textToTweet);
  //   $("blockquote a").attr("href", "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2F127.0.0.1%3A8000%2F&ref_src=twsrc%5Etfw&text=" + "textToTweet + &tw_p=tweetbutton&url=http%3A%2F%2F127.0.0.1%3A8000%2F");
  //   console.log("Test");
  // });
});

function setUpTweet() {
  var quote = $("#quote").text();
  var attributedTo = $("#attribution").text();
  var tweetURL = "https://twitter.com/intent/tweet?text=" + '"' + quote + '" - ' + attributedTo + "@alan1649";
  $("#tweet-button").attr("href", tweetURL);
}

// Functionality for new-quote button as well as cases for all possible quotes
function changeQuote() {
  var quote = "";
  var attributedTo = "";
  var randomValue = Math.floor((Math.random() * 10) + 1);
  switch(randomValue)
    {
      case 1:
        quote = "It is never too late to be what you might have been.";
        attributedTo = "George Eliot";
        break;
      case 2:
        quote = "The man who does not read has no advantage over the man who cannot read.";
        attributedTo = "Mark Twain";
        break;
      case 3:
        quote = "In three words I can sum up everything I have learned about life: it goes on.";
        attributedTo = "Robert Frost";
        break;
      case 4:
        quote = "Live as if you were to die tomorow. Learn as if you were to live forever.";
        attributedTo = "Mahatma Ghandi";
        break;
      case 5:
        quote = "Fairytales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.";
        attributedTo = "Neil Gaiman";
        break;
      case 6:
        quote = "We don't see things as they are, we see them as we are.";
        attributedTo = "Anaïs Nin";
        break;
      case 7:
        quote = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
        attributedTo = "Albert Einstein";
        break;
      case 8:
        quote = "Life isn't about finding yourself. Life is about creating yourself.";
        attributedTo = "George Bernard Shaw";
        break;
      case 9:
        quote = "Everybody is a genius. But if you judge a fish by its ability to climb a tree it will go its whole life believing it is stupid.";
        attributedTo = "Anonymous";
        break;
      case 10:
        quote = "Be the change that you wish to see in the world.";
        attributedTo = "Mahatma Ghandi";
      }
  $("#quote").html(quote);
  $("#attribution").html(attributedTo);
}
