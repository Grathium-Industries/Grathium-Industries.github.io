let infinateScroll = () => {
  let h = (screen.height / 1.6) + document.getElementById('webpage').scrollTop;
  document.getElementById('infinateScroll').style.height = h + "px";
}

// scroll to top button
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});

$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
});

let loop = () => {
  infinateScroll();
  setTimeout(loop, 1);
}
loop();
