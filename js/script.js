jQuery(document).ready(function($) {
  $(".btn-new-quote").on("click", function() {
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
  })
});
